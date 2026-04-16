#!/usr/bin/env bash
# =============================================================================
# optimize-videos.sh — Optimize public/ videos for web delivery
#
# Uses ffmpeg to:
#   1. Downscale oversized videos (4K/8K → 1080p max dimension)
#   2. Re-encode as H.264 CRF 23 MP4 with +faststart (progressive loading)
#   3. Create VP9 WebM alternatives (smaller — used by Chrome/Firefox/Edge)
#   4. Strip audio (every video on the site is muted)
#
# Usage:
#   npm run optimize:videos
#   # or directly:
#   bash scripts/optimize-videos.sh
#
# Behavior:
#   • Originals are moved to public/video-originals/ (gitignored)
#   • If the optimized MP4 is LARGER than the original, the original is kept
#   • If the optimized WebM is LARGER than the MP4, the WebM is discarded
#   • Videos already under SKIP_THRESHOLD (1.5MB) are left untouched
#
# Requires: ffmpeg (tested with v6.x)
# =============================================================================
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(dirname "$SCRIPT_DIR")"
PUBLIC="$PROJECT_ROOT/public"
BACKUP="$PUBLIC/video-originals"

MAX_DIM=1920          # longest dimension clamp
MP4_CRF=23            # lower = better quality, higher = smaller file
WEBM_CRF=33
SKIP_THRESHOLD=1572864  # 1.5MB — skip tiny videos (already optimized)

if ! command -v ffmpeg >/dev/null 2>&1; then
  echo "Error: ffmpeg not found. Install with: apt-get install ffmpeg" >&2
  exit 1
fi

mkdir -p "$BACKUP"

SCALE_FILTER="scale='min(${MAX_DIM},iw)':'min(${MAX_DIM},ih)':force_original_aspect_ratio=decrease,pad=ceil(iw/2)*2:ceil(ih/2)*2"

optimize_one() {
  local input="$1"
  local rel="${input#$PUBLIC/}"

  # Skip backups and showcase videos (already tiny)
  case "$rel" in
    video-originals/*) return 0 ;;
  esac

  local orig_bytes
  orig_bytes=$(stat -c%s "$input")
  if [ "$orig_bytes" -lt "$SKIP_THRESHOLD" ]; then
    echo "[SKIP] $rel ($(du -h "$input" | cut -f1)) — under threshold"
    return 0
  fi

  echo "[OPT]  $rel ($(du -h "$input" | cut -f1))"
  local base="${input%.mp4}"
  local mp4_tmp="${base}.opt.mp4"
  local webm_out="${base}.webm"

  # --- H.264 MP4 ---
  ffmpeg -y -hide_banner -loglevel error -i "$input" \
    -an \
    -c:v libx264 -crf "$MP4_CRF" -preset medium \
    -profile:v high -level 4.1 -pix_fmt yuv420p \
    -vf "$SCALE_FILTER" \
    -movflags +faststart \
    -threads 0 \
    "$mp4_tmp"

  local mp4_bytes
  mp4_bytes=$(stat -c%s "$mp4_tmp")
  if [ "$mp4_bytes" -ge "$orig_bytes" ]; then
    echo "       MP4: $(du -h "$mp4_tmp" | cut -f1) ≥ original, keeping original"
    rm -f "$mp4_tmp"
  else
    local backup_dir
    backup_dir="$BACKUP/$(dirname "$rel")"
    mkdir -p "$backup_dir"
    mv "$input" "$backup_dir/$(basename "$rel")"
    mv "$mp4_tmp" "$input"
    echo "       MP4: $(du -h "$input" | cut -f1) (was $(du -h "$backup_dir/$(basename "$rel")" | cut -f1))"
  fi

  # --- VP9 WebM ---
  ffmpeg -y -hide_banner -loglevel error -i "$input" \
    -an \
    -c:v libvpx-vp9 -crf "$WEBM_CRF" -b:v 0 \
    -pix_fmt yuv420p \
    -vf "$SCALE_FILTER" \
    -row-mt 1 -threads 0 \
    "$webm_out"

  local webm_bytes mp4_final
  webm_bytes=$(stat -c%s "$webm_out")
  mp4_final=$(stat -c%s "$input")
  if [ "$webm_bytes" -ge "$mp4_final" ]; then
    echo "       WebM: $(du -h "$webm_out" | cut -f1) ≥ MP4, discarding WebM"
    rm -f "$webm_out"
  else
    echo "       WebM: $(du -h "$webm_out" | cut -f1)"
  fi
}

echo "=== Video Optimization ==="
echo "Max dim: ${MAX_DIM}px | MP4 CRF: $MP4_CRF | WebM CRF: $WEBM_CRF"
echo "Originals → $BACKUP"
echo ""

# Process every .mp4 under public/ (excluding backups)
while IFS= read -r -d '' file; do
  optimize_one "$file"
done < <(find "$PUBLIC" -type f -name "*.mp4" -not -path "$BACKUP/*" -print0)

echo ""
echo "=== Done ==="
du -sh "$PUBLIC" | awk '{print "Public:    " $1}'
[ -d "$BACKUP" ] && du -sh "$BACKUP" | awk '{print "Originals: " $1}'
