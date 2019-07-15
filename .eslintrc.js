module.exports = {
  env: {
    browser: true,
    es6: true,
  },
  extends: [
    'airbnb',
  ],
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    'no-console': 0,
    "react/jsx-filename-extension": 0,
    "react/prop-types": 0,
    "jsx-a11y/label-has-for": 0,
    "react/jsx-one-expression-per-line": 0,
  },
};
