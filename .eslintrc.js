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
    'plugin:react-hooks/recommended',
    'prettier',
  ],
  overrides: [
    {
      files: ['./src/**/ErrorBoundary.tsx'],
      rules: {
        'no-console': 'off',
        '@typescript-eslint/no-unused-vars': 'off',
      },
    },
    {
      files: ['./config/storybook/webpack.config.ts'],
      rules: {
        '@typescript-eslint/no-explicit-any': 'off',
      },
    },
    {
      files: ['**/src/**/*.{test,stories}.tsx'],
      rules: {
        'max-len': 'off',
      },
    },
    {
      files: ['./json-server/*.js'],
      rules: {
        '@typescript-eslint/no-var-requires': 'off',
        'no-console': 'off',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
  },
  plugins: ['react', '@typescript-eslint', 'i18next'],
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
    'react/jsx-filename-extension': [
      2,
      { extensions: ['.js', '.jsx', '.tsx'] },
    ],
    'react/react-in-jsx-scope': 'off',
    'react/require-default-props': 'off',
    'react/jsx-props-no-spreading': 'off',
    '@typescript-eslint/ban-ts-comment': 'warn',
    'max-len': ['warn', { code: 110, ignoreComments: true }],
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/no-static-element-interactions': 'off',
    'no-param-reassign': 'off',
  },
  globals: {
    __IS_DEV__: true,
  },
};
