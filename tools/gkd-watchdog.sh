#!/system/bin/sh
# ============================================
# GKD 监听脚本 v5 看门狗
# 作用：确保 gkd-launch-listener-v5.sh 始终运行
# 每隔 30 秒检查一次，进程不存在则自动拉起
# ============================================

LISTENER="/sdcard/Download/gkd-launch-listener-v5.sh"
LOG="/sdcard/Download/gkd-listener.log"

log() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') [看门狗] $*" >> "$LOG"
}

log "看门狗启动"

while true; do
  if ! pgrep -f 'gkd-launch-listener-v5\.sh' >/dev/null 2>&1; then
    log "检测到监听脚本未运行，自动拉起"
    nohup sh "$LISTENER" >/dev/null 2>&1 &
    log "已重新启动监听脚本"
  fi
  sleep 30
done
