/* eslint-disable import/no-extraneous-dependencies */
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const flexBugs = require('postcss-flexbugs-fixes');

module.exports = {
  ident: 'postcss',
  plugins: [
    postcssImport({ root: __dirname }),
    flexBugs(),
    postcssPresetEnv({
      browsers: 'last 2 versions',
    }),
  ],
};
