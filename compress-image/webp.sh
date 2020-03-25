#!/bin/bash

DIR="./dist"

find $DIR \( -name \*.jpg -o -name \*.jpeg -o -name \*.png \) -print0 | \
while IFS= read -r -d '' src; do
  cwebp "$src" -o "${src%.*}.webp"
done

#JPEG_CWEBP_OPTS="-q 75 -m 4" # Jpeg向け非可逆cwebpオプション
#PNG_CWEBP_OPTS="-lossless" # PNG向け可逆cwebpオプション

#find $DIR \( -name \*.jpg -o -name \*.jpeg -o -name \*.png \) -print0 | \
#while IFS= read -r -d '' SRC; do
#  WEBP="$SRC.webp"
#  if [[ ! -e $WEBP || $SRC -nt $WEBP ]]; then
#    if [[ $SRC =~ \.jpe?g$ ]]; then
#      echo "Convert to lossy WebP: $SRC"
#      cwebp $JPEG_CWEBP_OPTS "$SRC" -o "$WEBP"
#    elif [[ $SRC =~ \.png$ ]]; then
#      echo "Convert to lossless WebP: $SRC"
#      cwebp $PNG_CWEBP_OPTS "$SRC" -o "$WEBP"
#    fi
#  fi
#done
