#!/system/bin/sh
# ============================================
# GKD 监听进程 OOM 防杀守护
# 作用：每隔 30 秒检查 v5 监听脚本和看门狗进程，
#       将其 oom_adj 设为 -17（不可杀）
#       即使进程被系统重新拉起（PID变化），也能自动重新设置
# ============================================

LOG="/sdcard/Download/gkd-listener.log"

log() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') [OOM守护] $*" >> "$LOG"
}

protect() {
  pattern="$1"
  for pid in $(pgrep -f "$pattern" 2>/dev/null); do
    if [ -d /proc/$pid ]; then
      cur=$(cat /proc/$pid/oom_adj 2>/dev/null)
      if [ "$cur" != "-17" ]; then
        echo -17 > /proc/$pid/oom_adj 2>/dev/null
        echo -1000 > /proc/$pid/oom_score_adj 2>/dev/null
        log "已设置 PID $pid ($pattern) oom_adj=-17"
      fi
    fi
  done
}

log "OOM 防杀守护启动"

while true; do
  protect 'gkd-launch-listener-v5\.sh'
  protect 'gkd-watchdog\.sh'
  sleep 30
done
