module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
    jest: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
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
    'i18next',
  ],
  rules: {
    'linebreak-style': 'off',
    'import/prefer-default-export': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': 'warn',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-underscore-dangle': 'off',
    'no-shadow': 'off',
    'import/no-extraneous-dependencies': ['error', { devDependencies: true }],
    'react/function-component-definition': 'off',
    'react/jsx-filename-extension': [2, { extensions: ['.js', '.jsx', '.tsx'] }],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'warn',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'max-len': ['warn', { code: 100, ignoreComments: true }],
  },
  globals: {
    __IS_DEV__: true,
  },
};
