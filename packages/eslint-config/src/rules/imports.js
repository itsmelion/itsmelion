export default {
  'import-x/extensions': [
    'error',
    'ignorePackages',
    {
      js: 'never',
      jsx: 'never',
      ts: 'never',
      tsx: 'never',
    },
  ],

  'import-x/order': [
    'warn',
    {
      'newlines-between': 'always-and-inside-groups',
      alphabetize: {
        order: 'asc',
        caseInsensitive: true,
      },
      groups: [
        'builtin',
        'external',
        ['internal', 'type'],
        ['parent', 'sibling', 'index'],
        'object',
      ],
      pathGroups: [
        { pattern: 'services**', group: 'internal', position: 'before' },
        { pattern: 'components**', group: 'internal', position: 'after' },
        { pattern: 'types**', group: 'internal', position: 'after' },
      ],
    },
  ],

  // Favor named exports
  'import-x/no-default-export': 'warn',
  'import-x/prefer-default-export': 'off',

  'import-x/no-extraneous-dependencies': [
    'warn',
    {
      peerDependencies: true,
      devDependencies: [
        '**/*.test.{js,jsx,ts,tsx}',
        '**/*.stories.{js,jsx,ts,tsx}',
      ],
      // No packageDir override — let it resolve the nearest package.json
      // per consumer. Revisit only if you confirm every consumer shares
      // a single root manifest.
    },
  ],
};
