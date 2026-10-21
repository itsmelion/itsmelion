import { fileURLToPath } from 'node:url';

const workspaceRoot = fileURLToPath(new URL('../../../..', import.meta.url));

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
        '**/*.spec.{js,jsx,ts,tsx}',
        '**/*.stories.{js,jsx,ts,tsx}',
        '**/eslint.config.{js,mjs,cjs,ts,mts,cts}',
        '**/*.config.{js,mjs,cjs,ts,mts,cts}',
        '**/next.config.{js,mjs,cjs,ts,mts,cts}',
      ],
      // Nx runs a project's lint target from its root; include the workspace
      // manifest too so shared tooling dependencies are recognized.
      // packageDir: [process.cwd(), workspaceRoot],
    },
  ],
};
