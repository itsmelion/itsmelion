/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const ModuleScopePlugin = require('react-dev-utils/ModuleScopePlugin');
const jpeg = require('imagemin-mozjpeg');
const png = require('imagemin-pngquant');
const gif = require('imagemin-gifsicle');
const svg = require('imagemin-svgo');
const webp = require('imagemin-webp');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const getClientEnvironment = require('./env');
const paths = require('./paths');

const env = getClientEnvironment('');

const isDev = process.env.NODE_ENV === 'development';

const common = {
  output: {
    path: paths.appBuild,
    // https://alia.ams3.digitaloceanspaces.com/ change this if proxy
    publicPath: '/',
  },
  resolve: {
    // This allows you to set a fallback for where Webpack should look for modules.
    // We placed these paths second because we want `node_modules` to "win"
    // if there are any conflicts. This matches Node resolution mechanism.
    // https://github.com/facebookincubator/create-react-app/issues/253
    modules: ['node_modules', paths.appNodeModules].concat(
      // It is guaranteed to exist because we tweak it in `env.js`
      process.env.NODE_PATH.split(path.delimiter).filter(Boolean)
    ),
    // These are the reasonable defaults supported by the Node ecosystem.
    // We also include JSX as a common component filename extension to support
    // some tools, although we do not recommend using it, see:
    // https://github.com/facebookincubator/create-react-app/issues/290
    // `web` extension prefixes have been added for better support
    // for React Native Web.
    extensions: ['.web.js', '.mjs', '.js', '.json', '.web.jsx', '.jsx'],
    alias: {

      // Support React Native Web
      // https://www.smashingmagazine.com/2016/08/a-glimpse-into-the-future-with-react-native-for-web/
      'react-native': 'react-native-web',
    },
    plugins: [
      // Prevents users from importing files from outside of src/ (or node_modules/).
      // This often causes confusion because we only process files within src/ with babel.
      // To fix this, we prevent you from importing files out of src/ -- if you'd like to,
      // please link the files into your node_modules/ and let module-resolution kick in.
      // Make sure your source files are compiled, as they will not be processed in any way.
      new ModuleScopePlugin(paths.appSrc, [paths.appPackageJson]),
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
  plugins: [
    new webpack.WatchIgnorePlugin([
      /\.d\.ts$/,
      /\.DS_Store$/,
    ]),
    new Dotenv(),
    new webpack.DefinePlugin(env.stringified),
    // new CleanWebpackPlugin('dist', {
    //   exclude: ['images', 'fonts'], beforeEmit: true,
    // }),
    new HtmlWebpackPlugin({
      template: `${process.env.PUBLIC_PATH}/index.html`,
      inject: 'body',
      hash: true,
      favicon: './src/images/favicons/favicon.ico',
      filename: 'index.html',
      minify: {
        removeComments: true,
        collapseWhitespace: true,
        removeRedundantAttributes: true,
        useShortDoctype: true,
        removeEmptyAttributes: true,
        removeStyleLinkTypeAttributes: true,
        keepClosingSlash: true,
        minifyJS: true,
        minifyCSS: true,
        minifyURLs: true,
      },
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css',
      chunkFilename: '[id].[contenthash].css',
    }),
  ],
  module: {
    strictExportPresence: true,
    rules: [
      {
        test: /\.(jsx?|mjs)$/,
        enforce: 'pre',
        use: [
          { loader: 'source-map-loader' },
          // {
          //   options: {
          //     formatter: eslintFormatter,
          //     eslintPath: require.resolve('eslint'),

          //   },
          //   loader: require.resolve('eslint-loader'),
          // },
        ],
        include: paths.appSrc,
      },
      {
        test: /\.(jsx?|mjs)$/,
        exclude: /node_modules/,
        use: { loader: require.resolve('babel-loader') },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: require.resolve('babel-loader') },
          { loader: 'ts-loader' },
        ],
      },
      {
        test: /\.s[ac]ss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
              includePaths: [path.resolve(__dirname, '../src/styles')],
            },
          },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, require.resolve('css-loader'), require.resolve('postcss-loader')],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: require.resolve('html-loader'),
            options: { minimize: true },
          },
        ],
      },
      {
        test: /\.(jpe?g|png|gif|svg|ico)/,
        use: [
          // {
          //   loader: 'url-loader',
          //   options: {
          //     limit: 8192,
          //   },
          // },
          {
            loader: 'img-loader',
            options: {
              plugins: [
                jpeg({
                  progressive: true,
                  arithmetic: false,
                  quality: 70,
                }),
                png({
                  quality: '65-90',
                  floyd: 0.5,
                  speed: 2,
                }),
                gif({ interlaced: false }),
                webp({ quality: 75 }),
                svg({
                  removeComments: true,
                  removeDoctype: true,
                  removeViewBox: true,
                  minifyStyles: true,
                  plugins: [
                    { removeTitle: true },
                    { convertPathData: false },
                  ],
                }),
              ],
            },
          },
          {
            loader: require.resolve('file-loader'),
            options: {
              name() {
                if (isDev) return '[path][name].[ext]';
                return '[path][name].[ext]?[hash]';
              },
              context: './src/images',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|pdf)$/,
        use: [
          // 'url-loader?limit=8000',
          {
            loader: require.resolve('file-loader'),
            options: {
              name: '[name].[ext]',
              context: './src/fonts',
              outputPath: 'fonts/',
            },
          },
        ],
      },
    ],
  },
  // Some libraries import Node modules but don't use them in the browser.
  // Tell Webpack to provide empty mocks for them so importing them works.
  node: {
    dgram: 'empty',
    fs: 'empty',
    net: 'empty',
    tls: 'empty',
    child_process: 'empty',
  },
};

module.exports = common;
