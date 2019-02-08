const { VueLoaderPlugin } = require('vue-loader')
const StylelintPlugin = require('stylelint-webpack-plugin')

// mode
// :production minify
// :development enable source map
const mode = process.env.NODE_ENV

module.exports = {
  mode,
  entry: ['@babel/polyfill', `./src/index.js`],

  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/,
        use: ['vue-style-loader', 'css-loader'],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // Babel のオプションを指定する
        options: {
          presets: [
            // ES2018 to ES5
            '@babel/preset-env',
          ],
          plugins: [
            ['@babel/proposal-object-rest-spread'],
            ['@babel/syntax-dynamic-import'],
          ],
        },
      },
    ],
  },
  // import 文で .ts ファイルを解決するため
  resolve: {
    // Webpackで利用するときの設定
    alias: {
      vue$: 'vue/dist/vue.esm.js',
    },
    extensions: ['*', '.js', '.vue', '.json'],
  },
  plugins: [
    // Vueを読み込めるようにするため
    new VueLoaderPlugin(),
    new StylelintPlugin({
      files: ['**/*.vue'],
    }),
  ],
}
