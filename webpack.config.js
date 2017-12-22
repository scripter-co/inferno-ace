const path = require('path');
const webpack = require('webpack');
const env = process.env.NODE_ENV || 'production';

module.exports = {
  entry: path.resolve(__dirname, './'),
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        loaders: [
          'babel-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['.js']
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
  ]
};
