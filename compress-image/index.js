const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

(async () => {
  await imagemin(['src/**/*.{jpg,png,gif,svg}'], 'dist', {
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [.65, .80], }),
      imageminGifsicle(),
      imageminSvgo()
    ]
  });
  console.log('Images optimized');
})();
