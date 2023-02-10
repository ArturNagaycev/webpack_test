const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const config = {
  entry: {
    index: './src/index.js',
    lodash: './src/lodash.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].bundle.js',
    clean: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html'
    })
  ],
  optimization: {
    minimize: true,
    minimizer: [
      new TerserPlugin({
        extractComments: false,
        terserOptions: {
          format: {
            comments: false,
          },
        },
      }),
    ],
  },
  mode: 'production',
};

module.exports = config;
