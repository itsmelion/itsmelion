// Full config object, scoped to TS files — this is the flat-config
// replacement for the old override-based typescriptGenerics block.
export default {
  files: ['**/*.ts', '**/*.tsx', '**/*.mts', '**/*.cts'],
  rules: {
    'no-undef': 'off',
    'no-unused-vars': 'off',
    '@typescript-eslint/no-unused-vars': [
      'warn',
      { argsIgnorePattern: '^_|ref', ignoreRestSiblings: true },
    ],

    'no-use-before-define': 'off',
    '@typescript-eslint/no-use-before-define': [
      'warn',
      { functions: false, classes: true, variables: false },
    ],

    'no-shadow': 'off',
    '@typescript-eslint/no-shadow': 'error',

    '@stylistic/indent': ['warn', 2],
  },
};
