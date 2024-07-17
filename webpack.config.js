
var config = {
  entry: './main.js',
  output: {
    path: './',
    filename: 'index.js'
  },
  devServer: {
    static: { directory: './' }
    hot: true,
    port: 3000
  },
  resolve: {
    modules: [ './', 'node_modules' ],
    extensions: ['.js', '.jsx']
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)?$/,
        exclude: /node_modules/,
        use: { 
          loader: 'babel-loader' 
        }
      }
    ]
  }
}

module.exports = config;
