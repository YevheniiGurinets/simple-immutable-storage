module.exports = {
  extends: ['plugin:@typescript-eslint/recommended', 'eslint:recommended'],
  parser: '@typescript-eslint/parser',
  plugins: ['jest', '@typescript-eslint'],
  env: {
    node: true,
    browser: true,
    es6: true,
    'jest/globals': true,
  },
  // custom rules
  rules: {
    // New eslint style rules that is not disabled by prettier:
    'lines-between-class-members': 'off',

    // Allowing warning and error console logging
    // use `invariant` and `warning`
    'no-console': ['error'],

    // Opting out of prefer destructuring (nicer with types in lots of cases)
    'prefer-destructuring': 'off',

    // Disallowing the use of variables starting with `_` unless it called on `this`.
    // Allowed: `this._secret = Symbol()`
    // Not allowed: `const _secret = Symbol()`
    'no-underscore-dangle': ['error', { allowAfterThis: true }],

    // Cannot reassign function parameters but allowing modification
    'no-param-reassign': ['error', { props: false }],

    // Allowing ++ on numbers
    'no-plusplus': 'off',

    '@typescript-eslint/no-inferrable-types': 'off',
    '@typescript-eslint/ban-ts-ignore': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/interface-name-prefix': 'off'
  },
};
