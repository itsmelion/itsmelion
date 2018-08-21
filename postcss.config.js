/* eslint-disable import/no-extraneous-dependencies */
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');

module.exports = {
  ident: 'postcss',
  plugins: [
    postcssImport({ root: __dirname }),
    postcssPresetEnv({
      browsers: 'last 2 versions',
    }),
  ],
};
