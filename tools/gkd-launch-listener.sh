#!/system/bin/sh
# ============================================
# GKD 规则触发联动脚本
# 作用：检测到 GKD 触发指定规则后，自动拉起目标应用
#
# 依赖：adb shell / Termux（有读取 /sdcard/Android/data 权限）
# 用法：
#   方式1：电脑 adb shell 后台运行
#     adb shell "nohup sh /sdcard/Download/gkd-launch-listener.sh >/dev/null 2>&1 &"
#   方式2：手机 Termux 中运行
#     sh gkd-launch-listener.sh
#   方式3：Shizuku/Root 环境直接执行
#     su -c "sh /sdcard/Download/gkd-launch-listener.sh"
#
# 配置说明：
#   TARGET_PKG       要拉起的目标应用包名（默认抖音）
#   TARGET_ACTIVITY  可选，目标 Activity 全名；留空则用系统默认启动
#   TRIGGER_KEYWORD  GKD 规则组名关键词（对应 test-launch.json5 中 group.name）
#   LOG_DIR          GKD 日志目录
# ============================================

# ====== 配置区（按需修改）======
TARGET_PKG="com.ss.android.ugc.aweme"      # 目标应用：抖音（可改成你要拉起的应用）
TARGET_ACTIVITY=""                           # 可选目标 Activity，留空自动
TRIGGER_KEYWORD="测试-触发后拉起应用"        # 触发规则名关键词（对应 GKD 规则组 name）
LOG_DIR="/sdcard/Android/data/li.songe.gkd/files/log"
# ================================

log() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') $*"
}

launch_target() {
  log ">>> 检测到 GKD 触发 [$TRIGGER_KEYWORD]，正在拉起 $TARGET_PKG ..."
  if [ -n "$TARGET_ACTIVITY" ]; then
    am start -n "$TARGET_ACTIVITY" 2>/dev/null
  else
    am start -p "$TARGET_PKG" 2>/dev/null
  fi
  # am start 失败时用 monkey 兜底拉起
  if [ $? -ne 0 ]; then
    monkey -p "$TARGET_PKG" -c android.intent.category.LAUNCHER 1 2>/dev/null
  fi
}

TODAY=$(date +%Y%m%d)
LOG_FILE="$LOG_DIR/gkd-$TODAY.log"
log "GKD 联动监听启动：监听 [$TRIGGER_KEYWORD] → 目标 $TARGET_PKG"
log "日志文件：$LOG_FILE"

# 使用 tail -F 流式监听日志，跨天自动跟随新文件
if [ -f "$LOG_FILE" ]; then
  tail -F "$LOG_FILE" 2>/dev/null | while read line; do
    case "$line" in
      *"$TRIGGER_KEYWORD"*) launch_target ;;
    esac
  done
else
  log "日志文件不存在，等待生成：$LOG_FILE"
  # 等待文件出现后重新运行本脚本
  while [ ! -f "$LOG_FILE" ]; do sleep 2; done
  exec sh "$0"
fi
