const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack') //to access built-in plugins
const path = require('path')

module.exports = {
  mode: 'development',
  entry: {
    path: path.resolve(__dirname, 'src')
  },
  devServer: {
    public: '0.0.0.0:8080'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  plugins: [new HtmlWebpackPlugin({ template: './src/index.html' })],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        use: [
          {
            loader: 'file-loader'
          }
        ]
      }
    ]
  }
}
