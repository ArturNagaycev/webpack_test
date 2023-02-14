import path from 'path';
import { fileURLToPath } from 'url';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const config = {
  entry: {
    main: './src/index.js',
    time: './src/time.js',
  },

  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].[contenthash].js',
    clean: true
  },

  plugins: [
    new HtmlWebpackPlugin({
      template: './index.html',
      filename: 'index.html',
      chunks: ['main']
    }),
    
    new HtmlWebpackPlugin({
      template: './time.html',
      filename: 'time.html',
      chunks: ['time']
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

    runtimeChunk: 'single',

    splitChunks: {
      cacheGroups: {
        reactVendor: {
          test: /[\\/]node_modules[\\/](lodash|moment)[\\/]/,
          name: 'shared',
          chunks: 'all',
        },
      },
    }
  },
};

export default config;
