/* eslint-disable import/no-extraneous-dependencies */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const jpeg = require('imagemin-mozjpeg');
const png = require('imagemin-pngquant');
const gif = require('imagemin-gifsicle');
const svg = require('imagemin-svgo');
const webp = require('imagemin-webp');
require('dotenv').config();

const isDev = process.env.NODE_ENV === 'development';

const common = {
  output: {
    // https://alia.ams3.digitaloceanspaces.com/ change this if proxy
    publicPath: '/',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
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
    new CleanWebpackPlugin('dist', {
      exclude: ['images', 'fonts'], beforeEmit: true,
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, `${process.env.PUBLIC_PATH}/index.html`),
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
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        enforce: 'pre',
        use: [
          { loader: 'source-map-loader' },
          {
            options: {
              formatter: eslintFormatter,
              eslintPath: require.resolve('eslint'),

            },
            loader: 'eslint-loader',
          },
        ],
        include: path.resolve(__dirname, 'src'),
      },
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: [
          { loader: 'babel-loader' },
          { loader: 'ts-loader' },
        ],
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader'],
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: 'html-loader',
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
            loader: 'file-loader',
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
            loader: 'file-loader',
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
};

module.exports = common;
