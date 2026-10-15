#!/system/bin/sh
# ============================================
# GKD 联动监听脚本 v6（照片触发完整链路）
# 逻辑：
#   1. 检测水印照片数量增加（拍照完成）→ 开启完整链路（不限制时间段）
#   2. 打开时钟 55 分钟倒计时
#   3. 检测多多买菜发车控件（GKD规则"点击出仓库"是否命中）
#      - 已出现 → 点击发车（由GKD自动点击）
#      - 未出现 → 先发照片（微信发送水印照片到中邮群）
#   4. 点击导航（多多买菜→高德地图→自动开始导航）
#   5. 导航开启后：
#      - 若之前未发照片 → 转跳微信发送照片
#      - 若之前已发照片 → 直接检测发车控件
#   6. 照片发送完毕 → 再次检测发车控件（出现则补点发车）
#   7. 回到导航
# ============================================

CONF="/sdcard/Download/gkd-listener.conf"
ACTIONS="/sdcard/Download/gkd-listener-actions.conf"

# 默认值
TRIGGER_KEYWORDS=""
START_HOUR=-1
END_HOUR=-1
TARGET_PKG="com.xunmeng.tms"
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

load_config() {
  if [ -f "$CONF" ]; then
    . "$CONF" 2>/dev/null
  fi
}

count_photos() {
  if [ -d "$PHOTO_DIR" ]; then
    ls "$PHOTO_DIR" 2>/dev/null | grep -c "$PHOTO_PATTERN"
  else
    echo 0
  fi
}

# GKD 日志自指定偏移起是否出现关键词（用于检测规则命中）
gkd_log_hit() {
  local kw="$1"
  local base="$2"
  [ -z "$base" ] && base=0
  local today=$(date +%Y%m%d)
  local logfile="$LOG_DIR/gkd-$today.log"
  [ -f "$logfile" ] || return 1
  if [ "$base" -gt 0 ]; then
    tail -c +$((base + 1)) "$logfile" 2>/dev/null | grep -q "$kw"
  else
    grep -q "$kw" "$logfile" 2>/dev/null
  fi
}

# 等待发车控件出现（GKD规则"点击出仓库"命中），超时返回1
wait_for_depot_control() {
  local timeout="${1:-20}"
  local waited=0
  while [ "$waited" -lt "$timeout" ]; do
    if gkd_log_hit "点击出仓库" "$GKD_CHECK_BASE"; then
      return 0
    fi
    sleep 3
    waited=$((waited + 3))
  done
  return 1
}

# 微信发送照片到中邮群
send_wechat_photos() {
  log "[微信] 打开微信进入中邮群"
  am start -n com.tencent.mm/.ui.LauncherUI 2>/dev/null
  sleep 4
  log "[微信] 点击中邮群"
  input tap 628 561
  sleep 3
  log "[微信] 点击更多功能"
  input tap 1147 2579
  sleep 2
  log "[微信] 点击相册"
  input tap 189 2025
  sleep 2
  log "[微信] 勾选照片1"
  input tap 1141 952
  sleep 1
  log "[微信] 勾选照片2"
  input tap 231 1256
  sleep 1
  log "[微信] 点击发送"
  input tap 1053 2578
  sleep 3
  log "[微信] 照片发送完毕"
}

# 点击导航：回多多买菜 → 点导航 → 选高德 → 等待自动开始导航
click_navigation() {
  log "[导航] 回到多多买菜"
  am start -n com.xunmeng.tms/.activity.FlutterMainActivity 2>/dev/null
  sleep 3
  log "[导航] 点击导航按钮"
  input tap 201 769
  sleep 2
  log "[导航] 选择高德地图"
  input tap 610 2397
  sleep 10
  log "[导航] 等待GKD自动开始导航"
  sleep 4
}

# 回到导航界面
back_to_navigation() {
  log "[导航] 回到高德导航"
  am start -n com.autonavi.minimap/com.autonavi.map.activity.NewMapActivity 2>/dev/null
  sleep 2
}

# 回多多买菜检测发车控件（等待GKD命中）
check_depot_control() {
  log "[发车] 回到多多买菜检测发车控件"
  am start -n com.xunmeng.tms/.activity.FlutterMainActivity 2>/dev/null
  if wait_for_depot_control 20; then
    log "[发车] 发车控件已出现，GKD已点击发车"
    return 0
  else
    log "[发车] 发车控件未出现"
    return 1
  fi
}

# 完整流程
run_workflow() {
  log "===== 开始完整物流流程（照片触发） ====="

  # 记录 GKD 日志基准偏移（用于流程内检测发车控件）
  local today=$(date +%Y%m%d)
  local gkd_log="$LOG_DIR/gkd-$today.log"
  if [ -f "$gkd_log" ]; then
    GKD_CHECK_BASE=$(wc -c < "$gkd_log")
  else
    GKD_CHECK_BASE=0
  fi
  log "GKD日志基准偏移: $GKD_CHECK_BASE"

  # 1. 打开时钟 55 分钟倒计时
  log "[时钟] 打开55分钟倒计时"
  am start -n com.android.deskclock/.DeskClockTabActivity 2>/dev/null
  sleep 2
  input tap 1061 2564
  sleep 1
  input tap 609 2275
  sleep 1

  # 2. 回多多买菜，检测发车控件是否出现
  DEPOT_DONE=false
  if check_depot_control; then
    DEPOT_DONE=true
  fi

  # 3. 分支处理
  if [ "$DEPOT_DONE" = "false" ]; then
    log "[分支] 发车控件未出现，先发照片"
    send_wechat_photos
  else
    log "[分支] 发车控件已出现并点击发车，照片留待导航后发送"
  fi

  # 4. 点击导航
  click_navigation

  # 5. 导航后处理
  if [ "$DEPOT_DONE" = "true" ]; then
    # 已发车分支 → 现在转跳微信发送照片
    log "[分支] 已发车，导航后转跳微信发送照片"
    send_wechat_photos
    # 照片发送完毕，再次检测发车控件（补漏），重新记录基准
    GKD_CHECK_BASE=$(wc -c < "$LOG_DIR/gkd-$(date +%Y%m%d).log" 2>/dev/null)
    check_depot_control
  else
    # 未发车分支 → 照片已发，导航后检测发车控件（补点发车）
    log "[分支] 照片已发，导航后检测发车控件"
    GKD_CHECK_BASE=$(wc -c < "$LOG_DIR/gkd-$(date +%Y%m%d).log" 2>/dev/null)
    check_depot_control
  fi

  # 6. 回到导航
  back_to_navigation

  log "===== 完整物流流程结束 ====="
}

# GKD 关键词触发处理（默认禁用，保留兼容）
handle_trigger() {
  load_config
  NOW=$(date +%s)
  if [ $((NOW - LAST_TRIGGER)) -lt "$DEDUP_SEC" ]; then
    log "去重窗口($DEDUP_SEC秒)内，跳过重复触发"
    return
  fi
  LAST_TRIGGER=$NOW
  log ">>> 检测到 GKD 触发！执行完整流程"
  run_workflow
}

# 主逻辑
load_config
log "GKD v6 监听启动"
log "配置: $CONF"
log "照片目录: $PHOTO_DIR"

LAST_TRIGGER=0
PHOTO_BASELINE=$(count_photos)
log "初始照片数量: $PHOTO_BASELINE"
LAST_PHOTO_TRIGGER=0

# 初始化 GKD 日志偏移（关键词触发备用）
TODAY=$(date +%Y%m%d)
LOG_FILE="$LOG_DIR/gkd-$TODAY.log"
if [ -f "$LOG_FILE" ]; then
  OFFSET=$(wc -c < "$LOG_FILE" 2>/dev/null)
else
  OFFSET=0
fi

while true; do
  # 1) GKD 日志关键词触发（仅当配置了关键词时）
  if [ -n "$TRIGGER_KEYWORDS" ]; then
    TODAY=$(date +%Y%m%d)
    LOG_FILE="$LOG_DIR/gkd-$TODAY.log"
    if [ -f "$LOG_FILE" ]; then
      SIZE=$(wc -c < "$LOG_FILE" 2>/dev/null)
      if [ "$SIZE" -gt "$OFFSET" ]; then
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
  fi

  # 2) 水印照片数量检测（拍照完成触发，不限制时间段）
  CUR=$(count_photos)
  if [ "$CUR" -gt "$PHOTO_BASELINE" ]; then
    NOW=$(date +%s)
    if [ $((NOW - LAST_PHOTO_TRIGGER)) -ge "$PHOTO_DEDUP_SEC" ]; then
      LAST_PHOTO_TRIGGER=$NOW
      log ">>> 检测到水印照片新增（基线$PHOTO_BASELINE→现$CUR），开启完整链路"
      PHOTO_BASELINE=$CUR
      run_workflow
    else
      PHOTO_BASELINE=$CUR
    fi
  fi

  sleep "$POLL_INTERVAL"
done
