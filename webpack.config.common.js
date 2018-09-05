/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const Dotenv = require('dotenv-webpack');
const eslintFormatter = require('react-dev-utils/eslintFormatter');
const { resolve } = require('path');

require('dotenv').config();

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
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      template: './src/index.html',
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
        include: resolve(__dirname, 'src'),
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
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              svgo: {
                removeComments: true,
                removeDoctype: true,
                removeViewBox: true,
                minifyStyles: true,
              },
            },
          },
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]?[hash]',
              context: './src/images',
              outputPath: 'images/',
            },
          },
        ],
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf|pdf)$/,
        use: [
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
