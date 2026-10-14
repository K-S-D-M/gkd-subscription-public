#!/system/bin/sh
# ============================================
# GKD 监听进程 OOM 防杀守护 v2
# 作用（每 30 秒）：
#   1. 确保 v5 监听脚本运行（未运行则拉起）
#   2. 确保看门狗运行（未运行则拉起，保证看门狗也被保护）
#   3. 给 v5、看门狗设置 oom_adj=-17（不可杀）
#   4. 给自己设置 oom_adj=-17（不可杀）
# ============================================

LISTENER="/sdcard/Download/gkd-launch-listener-v5.sh"
WATCHDOG="/sdcard/Download/gkd-watchdog.sh"
LOG="/sdcard/Download/gkd-listener.log"

log() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') [OOM守护] $*" >> "$LOG"
}

# 设置进程不可杀
protect() {
  pattern="$1"
  for pid in $(pgrep -f "$pattern" 2>/dev/null); do
    if [ -d /proc/$pid ]; then
      cur=$(cat /proc/$pid/oom_adj 2>/dev/null)
      if [ "$cur" != "-17" ]; then
        echo -17 > /proc/$pid/oom_adj 2>/dev/null
        echo -1000 > /proc/$pid/oom_score_adj 2>/dev/null
        log "已设置 PID $pid oom_adj=-17"
      fi
    fi
  done
}

# 确保脚本运行
ensure_running() {
  script="$1"
  pattern="$2"
  if ! pgrep -f "$pattern" >/dev/null 2>&1; then
    log "检测到 $script 未运行，自动拉起"
    nohup sh "$script" >/dev/null 2>&1 &
  fi
}

log "OOM 防杀守护 v2 启动"

while true; do
  ensure_running "$LISTENER" 'gkd-launch-listener-v5\.sh'
  ensure_running "$WATCHDOG" 'gkd-watchdog\.sh'
  protect 'gkd-launch-listener-v5\.sh'
  protect 'gkd-watchdog\.sh'
  SELF=$$
  echo -17 > /proc/$SELF/oom_adj 2>/dev/null
  echo -1000 > /proc/$SELF/oom_score_adj 2>/dev/null
  sleep 30
done
