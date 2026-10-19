import stylistic from '@stylistic/eslint-plugin';

export const whitespacePlugins = { '@stylistic': stylistic };

export default {
  '@stylistic/indent': ['error', 2],
  '@stylistic/max-len': [
    'error',
    {
      code: 90,
      tabWidth: 2,
      ignoreComments: true,
      ignoreTrailingComments: true,
      ignoreUrls: true,
      ignoreStrings: true,
      ignoreTemplateLiterals: true,
      ignoreRegExpLiterals: true,
    },
  ],
};
