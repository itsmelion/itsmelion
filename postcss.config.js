/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const postcssPresetEnv = require('postcss-preset-env');
const postcssImport = require('postcss-import');
const flexBugs = require('postcss-flexbugs-fixes');

module.exports = {
  ident: 'postcss',
  plugins: [
    postcssImport({ root: path.join(__dirname, 'src') }),
    flexBugs(),
    postcssPresetEnv({
      browsers: [
        '>0.2%',
        'not dead',
        'not ie <= 11',
        'not op_mini all',
      ],
    }),
  ],
  flexbox: 'no-2009',
};
