#!/system/bin/sh
# ============================================
# GKD 联动监听脚本 v5.3（可配置版+水印照片触发）
# 特点：
#   1. 读取 /sdcard/Download/gkd-listener.conf 配置文件
#   2. 支持时间段判断（如 19:00-21:00）
#   3. 支持多触发关键词（| 分隔）
#   4. 触发后执行 /sdcard/Download/gkd-listener-actions.conf 中的动作序列
#   5. 每次触发实时重新读取配置（改配置无需重启）
#   6. 单进程轮询，内存 ~4MB
#   7. 水印照片数量检测：拍照完成后自动触发流程（同样遵守时间段）
# ============================================

CONF="/sdcard/Download/gkd-listener.conf"
ACTIONS="/sdcard/Download/gkd-listener-actions.conf"

# 默认值（配置文件不存在时使用）
TRIGGER_KEYWORDS="测试-触发后拉起应用"
START_HOUR=-1
END_HOUR=-1
TARGET_PKG=""
LOG_DIR="/sdcard/Android/data/li.songe.gkd/files/log"
SELF_LOG="/sdcard/Download/gkd-listener.log"
DEDUP_SEC=60
POLL_INTERVAL=0.5
PHOTO_DIR="/sdcard/DCIM/pddtms/多多买菜水印相机"
PHOTO_PATTERN="water_.*\\.jpg"
PHOTO_DEDUP_SEC=300

log() {
  echo "$(date '+%Y-%m-%d %H:%M:%S') $*" >> "$SELF_LOG"
}

# 重新加载配置
load_config() {
  if [ -f "$CONF" ]; then
    . "$CONF" 2>/dev/null
  fi
  # 若配置中未定义则保留默认值（已在文件头定义）
}

# 是否在启用时间段内
in_time_window() {
  # 未限制时间段
  if [ "$START_HOUR" = "-1" ] || [ -z "$START_HOUR" ]; then
    return 0
  fi
  H=$(date +%-H)
  if [ "$H" -ge "$START_HOUR" ] && [ "$H" -lt "$END_HOUR" ]; then
    return 0
  fi
  return 1
}

# 统计水印照片数量
count_photos() {
  if [ -d "$PHOTO_DIR" ]; then
    ls "$PHOTO_DIR" 2>/dev/null | grep -c "$PHOTO_PATTERN"
  else
    echo 0
  fi
}

# 执行动作序列
run_actions() {
  log "执行动作序列：$ACTIONS"
  if [ ! -f "$ACTIONS" ]; then
    log "动作文件不存在：$ACTIONS"
    return
  fi
  # 逐行读取（跳过空行和注释）
  while IFS= read -r line; do
    line=$(echo "$line" | sed 's/^[ \t]*//')
    case "$line" in
      ''|'#'*) continue ;;
    esac
    log "执行: $line"
    # 支持 sleep 命令由脚本处理（避免子 shell 阻塞读取）
    case "$line" in
      sleep*)
        eval "$line" ;;
      *)
        eval "$line" 2>&1 | head -c 200 >> "$SELF_LOG"
        ;;
    esac
  done < "$ACTIONS"
  log "动作序列执行完毕"
}

# 触发处理
handle_trigger() {
  # 先重新加载配置（实时生效）
  load_config
  if ! in_time_window; then
    log "当前不在启用时间段内，跳过触发"
    return
  fi
  NOW=$(date +%s)
  if [ $((NOW - LAST_TRIGGER)) -lt "$DEDUP_SEC" ]; then
    log "去重窗口($DEDUP_SEC秒)内，跳过重复触发"
    return
  fi
  LAST_TRIGGER=$NOW
  log ">>> 检测到 GKD 触发！执行动作序列"
  run_actions
}

# 主逻辑
load_config
log "GKD v5 监听启动"
log "配置: $CONF"
log "关键词: $TRIGGER_KEYWORDS"
log "时间段: ${START_HOUR}:00-${END_HOUR}:00"
log "照片目录: $PHOTO_DIR"

LAST_TRIGGER=0

# 记录初始照片数量（作为拍照触发基线）
PHOTO_BASELINE=$(count_photos)
log "初始照片数量: $PHOTO_BASELINE"
LAST_PHOTO_TRIGGER=0

TODAY=$(date +%Y%m%d)
LOG_FILE="$LOG_DIR/gkd-$TODAY.log"
log "日志文件: $LOG_FILE"

if [ -f "$LOG_FILE" ]; then
  OFFSET=$(wc -c < "$LOG_FILE" 2>/dev/null)
else
  OFFSET=0
fi
log "初始偏移: $OFFSET"

while true; do
  # 1) GKD 日志关键词触发
  if [ -f "$LOG_FILE" ]; then
    SIZE=$(wc -c < "$LOG_FILE" 2>/dev/null)
    if [ "$SIZE" -gt "$OFFSET" ]; then
      # 读取新增内容逐行处理，多关键词用 | 分隔逐个检查
      tail -c +$((OFFSET + 1)) "$LOG_FILE" 2>/dev/null | while read line; do
        for kw in $(echo "$TRIGGER_KEYWORDS" | tr '|' '\n'); do
          case "$line" in
            *"$kw"*) handle_trigger; break ;;
          esac
        done
      done
      OFFSET=$SIZE
    fi
  fi

  # 2) 水印照片数量检测（拍照完成触发）
  CUR=$(count_photos)
  if [ "$CUR" -gt "$PHOTO_BASELINE" ]; then
    NOW=$(date +%s)
    if [ $((NOW - LAST_PHOTO_TRIGGER)) -ge "$PHOTO_DEDUP_SEC" ]; then
      LAST_PHOTO_TRIGGER=$NOW
      log ">>> 检测到水印照片新增（基线$PHOTO_BASELINE→现$CUR），执行流程"
      PHOTO_BASELINE=$CUR
      # 照片检测也遵守时间段限制
      load_config
      if in_time_window; then
        run_actions
      else
        log "当前不在启用时间段内，跳过触发"
      fi
    else
      # 去重窗口内，只更新基线不触发
      PHOTO_BASELINE=$CUR
    fi
  fi

  sleep "$POLL_INTERVAL"
done
