import js from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import { defineConfig, globalIgnores } from "eslint/config";
import { createTypeScriptImportResolver } from 'eslint-import-resolver-typescript';
import { importX } from 'eslint-plugin-import-x';
import nPlugin from 'eslint-plugin-n';
import promisePlugin from 'eslint-plugin-promise';
import globals from 'globals';
import tseslint from 'typescript-eslint';

import genericRules from './rules/generic.js';
import importRules from './rules/imports.js';
import promiseRules from './rules/promises.js';
import typescriptGenerics from './rules/typescript-generics.js';
import whitespace, { whitespacePlugins } from './rules/whitespace.js';

export const base = defineConfig(
  globalIgnores(["dist",
    "build",
    'node_modules',
    '.next',
    '.next/**',
    'out',
    'out-tsc',
    'coverage',
    'public',
    'storybook-static',
    'storybook-static/**']),
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.node },
    },
    plugins: {
      ...whitespacePlugins,
      promise: promisePlugin,
      n: nPlugin,
      'import-x': importX,
      '@stylistic': stylistic,
    },
    settings: {
      'import-x/resolver-next': [createTypeScriptImportResolver()],
    },
    rules: {
      '@typescript-eslint/no-unused-vars': [
        'warn', { argsIgnorePattern: '^_' },
      ],
      ...whitespace,
      ...genericRules,
      ...promiseRules,
      ...importRules,
    },
  },
  typescriptGenerics,
);
