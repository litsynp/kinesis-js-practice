module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'prettier', // This should be in the last line
  ],
  parserOptions: {
    ecmaVersion: '2021',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 2, // error
    'no-unused-vars': 1,
    'no-multiple-empty-lines': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['src'],
      },
    },
  },
}
