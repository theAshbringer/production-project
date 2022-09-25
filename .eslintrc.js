module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
  ],
  overrides: [
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: [
    'react',
    '@typescript-eslint',
  ],
  rules: {
    // indent: [
    //   'error',
    //   2,
    // ],
    'linebreak-style': [
      'error',
      'windows',
    ],
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    // quotes: [
    //   'error',
    //   'single',
    // ],
    // semi: [
    //   'error',
    //   'always',
    // ],
  },
  globals: {
    __IS_DEV__: true,
  },
};
