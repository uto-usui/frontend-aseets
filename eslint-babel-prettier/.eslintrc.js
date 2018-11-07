module.exports = {
  root: true,
  env: {
    browser: true,
    es6: true,
  },
  settings: {
    'import/resolver': 'webpack',
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2018,
  },
  extends: [
    'airbnb-base',
    'plugin:vue/recommended',
    'plugin:prettier/recommended',
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['state'],
      },
    ],
  },
}
