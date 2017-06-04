const path = require('path')

module.exports = {
  entry: './demo/index.js',

  output: {
    path: path.join(__dirname, 'demo'),
    filename: 'bundle.js'
  },

  resolve: {
    alias: {
      'react-css-filter': path.join(__dirname, 'src/Filter')
    }
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  },

  devServer: {
    contentBase: 'demo/',
    historyApiFallback: true
  }
}
