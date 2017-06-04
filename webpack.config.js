const path = require('path')

module.exports = {
  entry: './src/index.js',

  output: {
    path: path.join(__dirname, 'app'),
    filename: 'bundle.js'
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
    contentBase: 'app/',
    historyApiFallback: true
  }
}
