module.exports =  {
  root: true,
  parser:  '@typescript-eslint/parser',
  plugins: [ '@typescript-eslint', 'react'],
  extends:  [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  rules:  {
    "no-console": 2,
    "@typescript-eslint/no-unused-vars": 2,
  },
  settings: {
    react: {
      "version": "detect",
    },
  },
};