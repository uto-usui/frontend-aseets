#!/bin/bash

DIR="./src"

find $DIR \( -name \*.jpg -o -name \*.jpeg -o -name \*.png \) -print0 | \
while IFS= read -r -d '' SRC; do
  WEBP="$SRC.webp"
  if [[ ! -e $WEBP || $SRC -nt $WEBP ]]; then
    cwebp "$SRC" -o "${SRC%.*}.webp"
  fi
done
