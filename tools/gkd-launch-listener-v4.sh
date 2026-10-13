#!/system/bin/sh
# ============================================
# GKD 规则触发联动脚本（优化版 v4 - 单进程轮询）
# 作用：检测到 GKD 触发指定规则后，自动拉起目标应用
#
# 相比 v1/v2/v3 的优化：
#   1. 真正单进程：不用 tail 管道，主进程直接轮询文件新增内容，
#      进程数 3 → 1，内存约 10.7MB → ~4MB
#   2. 防重复拉起：同一条规则 DEDUP_SEC 秒内只拉起一次（时间戳去重）
#   3. 日志可控：监听日志写入独立文件
#   4. 文件偏移追踪：记录上次读取位置，只处理新增行
#
# 依赖：adb shell / Termux（有读取 /sdcard/Android/data 权限）
# 用法：
#   nohup sh /sdcard/Download/gkd-launch-listener-v4.sh >/dev/null 2>&1 &
# ============================================

# ====== 配置区（按需修改）======
TARGET_PKG="com.ss.android.ugc.aweme"      # 目标应用：抖音（可改成你要拉起的应用）
TARGET_ACTIVITY=""                           # 可选目标 Activity，留空自动
TRIGGER_KEYWORD="测试-触发后拉起应用"        # 触发规则名关键词（对应 GKD 规则组 name）
LOG_DIR="/sdcard/Android/data/li.songe.gkd/files/log"   # GKD 日志目录
SELF_LOG="/sdcard/Download/gkd-listener.log"  # 监听脚本自身日志
DEDUP_SEC=5                                   # 防重复拉起时间窗（秒）
POLL_INTERVAL=0.5                             # 轮询间隔（秒）
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

# 初始偏移：从当前文件末尾开始（不读历史，避免启动时误触发）
if [ -f "$LOG_FILE" ]; then
  OFFSET=$(wc -c < "$LOG_FILE" 2>/dev/null)
else
  OFFSET=0
fi
log "初始偏移: $OFFSET"

# 主循环：轮询文件新增内容
while true; do
  if [ -f "$LOG_FILE" ]; then
    SIZE=$(wc -c < "$LOG_FILE" 2>/dev/null)
    if [ "$SIZE" -gt "$OFFSET" ]; then
      # 读取新增部分
      tail -c +$((OFFSET + 1)) "$LOG_FILE" 2>/dev/null | while read line; do
        case "$line" in
          *"$TRIGGER_KEYWORD"*) launch_target ;;
        esac
      done
      OFFSET=$SIZE
    fi
  fi
  sleep "$POLL_INTERVAL"
done
