// src/rules/generic.js
export const genericPlugins = {}; // filled where imported, see base.js

export default {
  'no-console': [
    'warn',
    {
      allow: [
        'warn', 'error', 'time', 'timeLog', 'timeEnd', 'info',
        'group', 'groupCollapsed', 'groupEnd', 'count', 'countReset', 'assert',
      ],
    },
  ],
  'no-use-before-define': ['warn', { functions: false, classes: false }],
  'no-template-curly-in-string': 'warn',
  'consistent-return': 'warn',
  'array-callback-return': 'warn',
  eqeqeq: 'error',
  'no-caller': 'error',
  'no-eq-null': 'error',
  'no-eval': 'error',
  'no-extend-native': 'warn',
  'no-extra-bind': 'warn',
  'no-extra-label': 'warn',
  'no-throw-literal': 'error',
  'prefer-promise-reject-errors': 'error',
  'for-direction': 'error',
  'getter-return': 'error',
  'no-compare-neg-zero': 'error',
  'no-shadow-restricted-names': 'error',
  'no-unused-vars': ['warn', { argsIgnorePattern: '^_|ref' }],

  // moved from core to @stylistic
  '@stylistic/linebreak-style': ['error', 'unix'],
  '@stylistic/arrow-parens': 'off',
  '@stylistic/no-floating-decimal': 'error',

  // moved from core to eslint-plugin-n
  'n/callback-return': 'error',
  'n/no-path-concat': 'warn',
};
