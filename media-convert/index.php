<?php
$dir = '.';

foreach (glob($dir . '/*.mp4') as $mp4) {
    if (strpos($mp4, '_avc.mp4') !== false
        || strpos($mp4, '_hevc.mp4') !== false
        || strpos($mp4, '_avc_750.mp4') !== false
        || strpos($mp4, '_hevc_750.mp4') !== false) {
        continue;
    }

    $path = pathinfo($mp4);

    $jpg = $dir . '/stillimage_' . $path['basename'];
    $jpg = str_replace('.mp4', '.jpg', $jpg);

    $avc = str_replace('.mp4', '_avc.mp4', $mp4);
    $hevc = str_replace('.mp4', '_hevc.mp4', $mp4);
    $webm = str_replace('.mp4', '.webm', $mp4);

    $avc_750 = str_replace('.mp4', '_avc_750.mp4', $mp4);
    $hevc_750 = str_replace('.mp4', '_hevc_750.mp4', $mp4);
    $webm_750 = str_replace('.mp4', '_750.webm', $mp4);

    if (file_exists($jpg)) {
        continue;
    }

    // still image
    $command = "ffmpeg -i $mp4 -ss 1 -vframes 1 -f image2 $jpg";
    exec($command);

    // avc
    $command = "ffmpeg -i $mp4 -c:v libx264 -preset ultrafast -pix_fmt yuv420p $avc";
    exec($command);

    // hevc
    $command = "ffmpeg -i $mp4 -c:v hevc -tag:v hvc1 -preset ultrafast -pix_fmt yuv420p $hevc";
    exec($command);

    // webm
    $command = "ffmpeg -i $mp4 -c:v libvpx-vp9 -pass 1 -b:v 1000K -threads 1 -speed 4 -tile-columns 0 -frame-parallel 0 -g 9999 -aq-mode 0 -f webm -strict -2 -y /dev/null";
    exec($command);
    $command = "ffmpeg -i $mp4 -c:v libvpx-vp9 -pass 2 -b:v 1000K -threads 1 -speed 0 -tile-columns 0 -frame-parallel 0 -auto-alt-ref 1 -lag-in-frames 25 -g 9999 -aq-mode 0 -f webm -strict -2 $webm";
    exec($command);

    if (file_exists('ffmpeg2pass-0.log')) {
        unlink('ffmpeg2pass-0.log');
    }

    // avc 750
    $command = "ffmpeg -i $mp4 -c:v libx264 -vf scale=750:-1 -preset ultrafast -pix_fmt yuv420p $avc_750";
    exec($command);
    if (filesize($avc_750) == 0) {
        $command = "ffmpeg -i $mp4 -c:v libx264 -vf scale=750:-2 -preset ultrafast -pix_fmt yuv420p -y $avc_750";
        exec($command);
    }

    // hevc 750
    $command = "ffmpeg -i $mp4 -c:v hevc -tag:v hvc1 -vf scale=750:-1 -preset ultrafast -pix_fmt yuv420p $hevc_750";
    exec($command);
    if (filesize($hevc_750) == 0) {
        $command = "ffmpeg -i $mp4 -c:v hevc -tag:v hvc1 -vf scale=750:-2 -preset ultrafast -pix_fmt yuv420p -y $hevc_750";
        exec($command);
    }

    // webm 750
    $command = "ffmpeg -i $mp4 -c:v libvpx-vp9 -pass 1 -b:v 1000K -vf scale=750:-1 -threads 1 -speed 4 -tile-columns 0 -frame-parallel 0 -g 9999 -aq-mode 0 -f webm -strict -2 -y /dev/null";
    exec($command);
    $command = "ffmpeg -i $mp4 -c:v libvpx-vp9 -pass 2 -b:v 1000K -vf scale=750:-1 -threads 1 -speed 0 -tile-columns 0 -frame-parallel 0 -auto-alt-ref 1 -lag-in-frames 25 -g 9999 -aq-mode 0 -f webm -strict -2 $webm_750";
    exec($command);

    if (file_exists('ffmpeg2pass-0.log')) {
        unlink('ffmpeg2pass-0.log');
    }

    break;
}
