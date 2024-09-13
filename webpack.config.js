/* globals __dirname, require, module */
/* tslint:disable no-var-requires */
/*'tslint @typescript-eslint/no-require-imports': 'off',*/
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, './src/index.tsx'),
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
    alias: {
      '@UI': path.resolve(__dirname, 'src/components/UI'),
      '@models': path.resolve(__dirname, 'src/models'),
      '@store': path.resolve(__dirname, 'src/store'),
      '@utils': path.resolve(__dirname, 'src/utils'),
    },
  },
  module: {
    rules: [
      {
        test: /\.(ts|js)x?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ],
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(ttf|png|jpg|ico)$/,
        loader: 'file-loader',
      },
    ],
  },
  output: {
    path: path.resolve(__dirname, './build'),
    filename: 'bundle.js',
    clean: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './src/index.html'),
    }),
  ],

  devServer: {
    port: 3001,
    hot: 'only',
    static: {
      directory: path.join(__dirname, './'),
      serveIndex: true,
    },
    historyApiFallback: true,
  },
  performance: { hints: false },
};
