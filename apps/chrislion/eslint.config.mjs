import { base, reactConfig, nxConfig } from '@chrislion/eslint-config';
import nextVitals from 'eslint-config-next/core-web-vitals';

const sharedReactPlugins = reactConfig.find(
  (config) => config.plugins?.react,
).plugins;
const nextConfigs = nextVitals
  .filter((config) => config.name !== 'next/typescript')
  .map((config) => {
    if (config.name !== 'next') {
      return config;
    }

    return {
      ...config,
      plugins: {
        ...config.plugins,
        react: sharedReactPlugins.react,
        'react-hooks': sharedReactPlugins['react-hooks'],
      },
    };
  });

// eslint-disable-next-line import/no-anonymous-default-export, import-x/no-default-export
export default [
  ...nxConfig,
  ...base,
  ...reactConfig,
  ...nextConfigs,
  {
    // The shared base already includes typescript-eslint's recommended rules.
    // Keep Next's additional TypeScript rules without loading its duplicate plugin.
    rules: {
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-unused-expressions': 'warn',
    },
  },
  {
    files: ['**/{page,layout,route}.{js,jsx,ts,tsx}'],
    rules: {
      'import-x/no-default-export': 'off',
    },
  },
  {
    files: ['jest.config.cts'],
    rules: {
      // ESLint 9's recommended set newly flags Jest's CommonJS configuration.
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
  {
    settings: {
      next: {
        // Nx apps don't live at the workspace root — tell the Next
        // plugin where this app actually is.
        rootDir: 'apps/chrislion/',
      },
    },
  },
  {
    ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts'],
  },
];
