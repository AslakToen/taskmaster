const path = require('path');

module.exports = {
  entry: './public/javascripts/index.js',
  output: {
    path: path.resolve('public/javascripts'),
    filename: 'index_bundle.js'
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
    ]
  },
}
