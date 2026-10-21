import { base } from './src/index.js';

export default [
  ...base,
  {
    rules: {
      'import-x/no-default-export': 'off',
      'import-x/extensions': [
        'error',
        'ignorePackages',
        {
          js: 'always',
          jsx: 'never',
          ts: 'never',
          tsx: 'never',
        },
      ],
    },
  },
];
