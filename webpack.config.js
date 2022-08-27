const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { mkdir } = require('fs');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require('path');

module.exports = {
  entry:{ main: './src/pages/index.js'},
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'main.js',
  },
  mode: 'development',
  devServer: {
    port: 8080,
    compress: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new MiniCssExtractPlugin(),
    new CleanWebpackPlugin(),
  ],
  module:{
    rules: [
      {
        // регулярное выражение, которое ищет js
        test: /\.(js)$/,
        use: 'babel-loader',
        exclude: '/node_modules/'
      },
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource',
        generator: {
          filename: 'images/[name].[hash][ext]'
        }
      },
      {
        // регулярное выражение, которое ищет все файлы с такими расширениями
        test: /\.(woff(2)?|eot|ttf|otf)$/,
        type: 'asset/resource',
        generator: {
          filename: 'fonts/[name].[hash][ext]'
        }
      },
      {
      test: /\.css$/,
      use: [
        MiniCssExtractPlugin.loader,
        {
          loader: 'css-loader',
          options: {
            importLoaders: 1
          }
        },
        'postcss-loader'
      ]
    }]
  }
}