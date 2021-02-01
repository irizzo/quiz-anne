module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    semi: ['error', 'never'],
    quotes: ['error', 'single'],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'linebreak-style': 'off',
    'no-console': 'off',
    'max-len': [
      'warn',
      { code: 85, tabWidth: 2 },
      { ignoreComments: true },
      { ignoreUrls: true },
    ],
    'react/prop-types': 'off',
    'react/jsx-props-no-spreading': 'off',
  },
}
