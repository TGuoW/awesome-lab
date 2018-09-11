module.exports = {
  root: true,
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    node: true,
    es6: true
  },
  extends: "standard",
  // globals: {
  //   __static: true
  // },
  plugins: [
    "html"
  ],
  "rules": {
    // "global-require": 0,
    // "import/no-unresolved": 0,
    // "import/extensions": 0,
    'arrow-parens': 0,
    // allow async-await
    'generator-star-spacing': 0,
    // allow debugger during development
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0
  }
}
