/* eslint-disable import/no-extraneous-dependencies */
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

require('dotenv').config();

// const devMode = process.env.NODE_ENV === 'development';
const common = {
  entry: ['./src/index.jsx'],
  output: {
    // https://alia.ams3.digitaloceanspaces.com/ change this if proxy
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
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
    new CleanWebpackPlugin('dist', {}),
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: 'body',
      hash: true,
      favicon: './src/images/favicons/favicon.ico',
      filename: 'index.html',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: { loader: 'babel-loader' },
      },
      { enforce: 'pre', test: /\.js$/, loader: 'source-map-loader' },
      // {
      //   test: /\.tsx?$/,
      //   exclude: /node_modules/,
      //   use: [
      //     { loader: 'babel-loader' },
      //     { loader: 'ts-loader' },
      //   ],
      // },
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
