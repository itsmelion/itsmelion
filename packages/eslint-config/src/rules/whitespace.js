import stylistic from '@stylistic/eslint-plugin';

export const whitespacePlugins = { '@stylistic': stylistic };

export default {
  '@stylistic/indent': ['error', 2],
  '@stylistic/object-property-newline': ['error', { allowAllPropertiesOnSameLine: true }],
  '@stylistic/array-element-newline': ['error', { multiline: true, minItems: 3 }],
  '@stylistic/comma-dangle': ['error', 'always-multiline'],
  '@stylistic/no-multiple-empty-lines': ['error', { max: 1, maxEOF: 0 }],
  '@stylistic/no-trailing-spaces': 'error',
  '@stylistic/space-before-blocks': 'error',
  '@stylistic/space-before-function-paren': ['error', 'never'],
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
