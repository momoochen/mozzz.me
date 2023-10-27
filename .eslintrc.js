module.exports = {
  root: true,
  env: {
    node: true
  },
  extends: [
    'standard',
    'prettier',
    'prettier/standard',
    'plugin:vue/recommended'
  ],
  plugins: ['vue', 'prettier'],
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: false
      }
    ],
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    'vue/html-closing-bracket-spacing': 'error',
    'vue/prop-name-casing': 'error',
    'vue/script-indent': 'error',
    'vue/multi-word-component-names': 'off',
    "vue/html-self-closing": 0,
    "vue/max-attributes-per-line": [2, {
      "singleline": 3,
      "multiline": {
        "max": 1,
      }
    }]
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
