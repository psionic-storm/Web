const HtmlWebpackPlugin = require('html-webpack-plugin');
// const { EnvironmentPlugin } = require('webpack');
const path = require('path');
require('dotenv').config();

const config = {
  entry: './src/index',
  output: {
    path: path.join(__dirname, '/dist'),
    filename: 'bundle.js',
    publicPath: '/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js'],
    alias: {
      Styles: path.resolve(__dirname, './src/styles'),
      Stories: path.resolve(__dirname, './src/stories'),
      Routes: path.resolve(__dirname, './src/routes'),
      Modules: path.resolve(__dirname, './src/modules'),
      Pages: path.resolve(__dirname, './src/pages'),
      Hooks: path.resolve(__dirname, './src/hooks'),
      Elements: path.resolve(__dirname, './src/elements'),
      Components: path.resolve(__dirname, './src/components'),
      Apis: path.resolve(__dirname, './src/apis'),
      Assets: path.resolve(__dirname, './src/assets'),
      Types: path.resolve(__dirname, './src/types'),
    },
  },

  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
  plugins: [
    // new EnvironmentPlugin(['KAKAO_API_KEY']),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
  ],
};

module.exports = config;
