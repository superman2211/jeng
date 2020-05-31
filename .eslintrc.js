module.exports = {
  env: {
    browser: true,
    es6: true,
    jest: true,
  },
  extends: [
    'airbnb-base',
  ],
  globals: {},
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    '@typescript-eslint',
  ],
  rules: {
	'no-useless-constructor': 'off',
    'no-tabs': 'off',
    'max-len': 'off',
    'no-plusplus': 'off',
    'no-bitwise': 'off',
	'no-param-reassign': 'off',
	'no-throw-literal': 'off',
	'no-underscore-dangle': 'off',
	'no-case-declarations': 'off',
    'lines-between-class-members': 'off',
    'no-nested-ternary': 'off',
    'import/extensions': 'off',
	'indent': ['error', 'tab', { 'SwitchCase': 1 }],
	'@typescript-eslint/type-annotation-spacing': ['error', { 'before': false, 'after': true, overrides: { arrow: { before: true, after: true } } }],
  },
  ignorePatterns: ['dist', 'node_modules'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
};
