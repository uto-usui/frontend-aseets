const imagemin = require('imagemin-keep-folder');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');
const imageminGifsicle = require('imagemin-gifsicle');
const imageminSvgo = require('imagemin-svgo');

(async () => {
  await imagemin(['src/**/*.{jpg,png,gif,svg}'], {
    plugins: [
      imageminMozjpeg({ quality: 80 }),
      imageminPngquant({ quality: [.65, .80], }),
      imageminGifsicle(),
      imageminSvgo()
    ],
    replaceOutputDir: output => {
      return output.replace(/src\//, 'dist/')
    }
  });
  console.log('🍱 Images optimized 🍱');
})();

