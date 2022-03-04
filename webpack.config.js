const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin');

const config = {
  entry: './index.js',
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.js'
  },
  devServer: {
    static: path.resolve(__dirname, 'build'),
    compress: true,
    port: 3000,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: './index.html',
        filename: 'index.html',
        inject: 'body'
    })
  ],
  module: {
    rules: [
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader',
          },
        ],
      },
    ],
  }
}

module.exports = config