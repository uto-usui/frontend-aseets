#!/bin/sh

mkdir crop
mkdir src

# resize original images
cd ./original
sips --resampleWidth 1200 *.png

# format from png to jpg
mogrify -format jpg *.png
rm *.png

# crop original images
cp *.jpg ../crop/
cd ../crop/
mogrify -crop 1200x675+0+0 *.jpg
find . -name "*.jpg" | while read file; do mv $file ${file/.jpg/_crop.jpg}; done

# Put images in src folder
cp *.jpg ../original/
cd ../original/
cp *.jpg ../src/

rm *.jpg
cd ../crop/
rm *.jpg
