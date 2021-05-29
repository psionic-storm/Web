module.exports = {
  env: {
    browser: true,
    node: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: ['@typescript-eslint', 'react', 'react-hooks', 'jsx-a11y'],
  rules: {
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    indent: ['error', 2, { SwitchCase: 1, ignoredNodes: ['TemplateLiteral'] }],
    'no-var': 'error',
    'max-len': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'arrow-parens': [2, 'as-needed', { requireForBlockBody: false }],
    'object-curly-spacing': ['error', 'always'],
    'key-spacing': ['error', { 'afterColon': true }],
    'no-trailing-spaces': ['error', { 'skipBlankLines': false }],
    'no-multiple-empty-lines': ['error', { max: 1 }],

    '@typescript-eslint/no-explicit-any': 'error',
    '@typescript-eslint/explicit-module-boundary-types': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
    '@typescript-eslint/no-unused-expressions': 'error',
    '@typescript-eslint/no-shadow': 'error',

    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    'react/jsx-max-props-per-line': ['error', { maximum: 1 }],
    'react/jsx-wrap-multilines': 'error',
    'react/jsx-closing-bracket-location': ['error', 'tag-aligned'],
  },
};
