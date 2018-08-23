/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const merge = require('webpack-merge');
const errorOverlayMiddleware = require('react-dev-utils/errorOverlayMiddleware');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const BrowserSyncPlugin = require('browser-sync-webpack-plugin');
const { resolve } = require('path');
const common = require('./webpack.config.common');

require('dotenv').config();
/* eslint-disable-block */
const devMode = process.env.NODE_ENV === 'development';

const config = merge(common, {
  mode: 'development',
  output: {
    // path: __dirname,
    // publicPath: '/',
    chunkFilename: '[name].js',
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json',
  },

  module: {
    rules: [
      {
        test: /\.s[ac]ss$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              sourceMap: true,
            },
          },
          'postcss-loader',
          'resolve-url-loader',
          {
            loader: 'sass-loader',
            options: {
              includePaths: [resolve(__dirname, 'src/styles')],
            },
          },
        ],
      },
    ],
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    new webpack.EnvironmentPlugin([
      'NODE_ENV',
      'appName',
      'HOST',
      'PORT',
      'browserSyncPort',
      'DEFAULT_LANG',
    ]),
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css',
    }),
    new webpack.HotModuleReplacementPlugin(),
    new BrowserSyncPlugin({
      port: Number(process.env.browserSyncPort),
      proxy: `http://${process.env.HOST}:${process.env.PORT}`,
      watchOptions: {
        ignoreInitial: true,
        ignored: './src',
      },
      injectChanges: true,
      ui: false,
      open: false,
      ghostMode: false,
      logPrefix: process.env.appName,
      logFileChanges: true,
    }, {
      reload: false,
    }),
  ],
  devtool: 'eval',
  devServer: {
    contentBase: resolve(__dirname, 'dist'),
    host: process.env.HOST,
    port: Number(process.env.PORT),
    compress: !devMode,
    inline: true,
    hot: true,
    disableHostCheck: true,
    historyApiFallback: true,
    watchOptions: {
      ignored: /node_modules/,
      aggregateTimeout: 500,
      poll: 1000,
    },
    clientLogLevel: 'warning',
    before(app) {
      // This lets us open files from the runtime error overlay.
      app.use(errorOverlayMiddleware());
    },
    // noInfo: true,

    // https: {
    //   key: fs.readFileSync('server/certificates/lion.test.key'),
    //   cert: fs.readFileSync('server/certificates/lion.test.crt'),
    //   ca: fs.readFileSync('/Users/lion/sites/myCA.pem'),
    // },

    // lazy: true,
    // overlay: true,
  },
});

module.exports = config;
