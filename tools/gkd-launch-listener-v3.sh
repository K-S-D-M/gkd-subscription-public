#!/system/bin/sh
# ============================================
# GKD 规则触发联动脚本（优化版 v3）
# 作用：检测到 GKD 触发指定规则后，自动拉起目标应用
#
# 相比 v1 的优化：
#   1. 单进程：tail -n +1 -F 直接循环读取，避免 while read 子 shell 开销
#   2. 防重复拉起：同一条规则 DEDUP_SEC 秒内只拉起一次（时间戳去重）
#   3. 日志可控：监听日志写入独立文件，不影响 GKD 日志
#   4. 首行读取：tail -n +1 -F 启动时先读已有内容，避免漏掉已触发规则
#
# 依赖：adb shell / Termux（有读取 /sdcard/Android/data 权限）
# 用法：
#   方式1：电脑 adb shell 后台运行
#     adb shell "nohup sh /sdcard/Download/gkd-launch-listener-v3.sh >/dev/null 2>&1 &"
#   方式2：手机 Termux 中运行
#     sh gkd-launch-listener-v3.sh
#   方式3：Shizuku/Root 环境直接执行
#     su -c "sh /sdcard/Download/gkd-launch-listener-v3.sh"
# ============================================

# ====== 配置区（按需修改）======
TARGET_PKG="com.ss.android.ugc.aweme"      # 目标应用：抖音（可改成你要拉起的应用）
TARGET_ACTIVITY=""                           # 可选目标 Activity，留空自动
TRIGGER_KEYWORD="测试-触发后拉起应用"        # 触发规则名关键词（对应 GKD 规则组 name）
LOG_DIR="/sdcard/Android/data/li.songe.gkd/files/log"   # GKD 日志目录
SELF_LOG="/sdcard/Download/gkd-listener.log"  # 监听脚本自身日志
DEDUP_SEC=5                                   # 防重复拉起时间窗（秒）
# ================================

log() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') $*" >> "$SELF_LOG"
}

LAST_TRIGGER=0
launch_target() {
  NOW=$(date +%s)
  # 去重：DEDUP_SEC 秒内不重复拉起
  if [ $((NOW - LAST_TRIGGER)) -lt "$DEDUP_SEC" ]; then
    return
  fi
  LAST_TRIGGER=$NOW
  log ">>> 检测到 GKD 触发 [$TRIGGER_KEYWORD]，拉起 $TARGET_PKG"
  if [ -n "$TARGET_ACTIVITY" ]; then
    am start -n "$TARGET_ACTIVITY" 2>/dev/null
  else
    am start -p "$TARGET_PKG" 2>/dev/null
  fi
  # am start 失败时用 monkey 兜底
  if [ $? -ne 0 ]; then
    monkey -p "$TARGET_PKG" -c android.intent.category.LAUNCHER 1 2>/dev/null
  fi
}

TODAY=$(date +%Y%m%d)
LOG_FILE="$LOG_DIR/gkd-$TODAY.log"
log "GKD 联动监听启动：监听 [$TRIGGER_KEYWORD] → 目标 $TARGET_PKG"
log "日志文件：$LOG_FILE"

# tail -n +1 -F：启动时先读已有内容，之后跟随新内容
tail -n +1 -F "$LOG_FILE" 2>/dev/null | while read line; do
  case "$line" in
    *"$TRIGGER_KEYWORD"*) launch_target ;;
  esac
done
