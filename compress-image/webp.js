const imagemin = require('imagemin-keep-folder')
const webp = require('imagemin-webp');

(async () => {
  await imagemin(['src/**/*.{jpg,png}'],
    {
      use: [
        webp({
          quality: 75,
        }),
      ],
    })
  console.log('🍱 convert WebP 🍱')
})()
