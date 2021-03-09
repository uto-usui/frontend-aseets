<?php
$dir = '.';

foreach (glob('*.gif') as $gif) {
    $mp4 = str_replace('.gif', '.mp4', $gif);
    $command = "ffmpeg -i $gif -movflags faststart -pix_fmt yuv420p -vf \"scale=trunc(iw/2)*2:trunc(ih/2)*2\" $mp4";
    exec($command);
}
