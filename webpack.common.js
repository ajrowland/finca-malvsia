const StyleLintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const path = require('path');

module.exports = {
  entry: {
    styles: path.resolve(__dirname, 'src/css/main.scss'),
    app: ['@babel/polyfill', path.resolve(__dirname, 'src/js/main.js')]
  },
  output: {
    path: path.resolve(__dirname, 'wwwroot'),
    publicPath: '/',
    filename: 'content/js/[name].js'
  },
  module: {
    rules: [
      {
        enforce: 'pre',
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          cacheDirectory: true,
        },
      },
      {
        test: /\.(woff|woff2|eot|ttf)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: 'content/fonts/[name].[ext]',
              publicPath: '/',
            },
          },
        ],
      },
      {
        test: /\.svg$/,
        use: [
          {
            loader: 'babel-loader',
          }
        ],
      },
    ],
  },
  plugins: [
    new StyleLintPlugin({
      configFile: path.resolve(__dirname, '.stylelintrc.json'),
      files: '**/*.s?(a|c)ss',
      failOnError: false,
      syntax: 'scss',
    }),
    new CleanWebpackPlugin("wwwroot/content", {} ),
    new HtmlWebpackPlugin({
      template: "./Pages/Shared/_LayoutTemplate.cshtml",
      filename: "../Pages/Shared/_Layout.cshtml"
    }),
    new CopyWebpackPlugin([
      {
        from: 'src/images',
        to: 'content/images',
      },
    ]),
  ],
};
