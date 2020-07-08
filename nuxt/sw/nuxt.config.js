export default {
  mode: 'universal',
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#fff' },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['~/plugins/workbox-update.client.js'],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    '@nuxt/typescript-build',
    // Doc: https://github.com/nuxt-community/stylelint-module
    '@nuxtjs/stylelint-module'
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv'
  ],
  /*
   ** Build configuration
   */
  build: {
    // fixed file name
    filenames: {
      app: () => '[name].js',
      chunk: () => '[name].js',
      css: () => '[name].js',
      img: () => '[path][name].[ext]',
      font: () => '[path][name].[ext]',
      video: () => '[path][name].[ext]'
    },

    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  },

  workbox: {
    // default off
    offline: false,
    skipWaiting: true,
    clientsClaim: true,
    // ios safari video support
    cachingExtensions: '~/plugins/workbox-range-request.js'
  }
}
