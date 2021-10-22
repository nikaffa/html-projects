// Contains basic webpack configuration
const path = require('path'); //path module from node.js library

module.exports = {
  entry: './src/index.js', //initial sourse of js
  output: { //where to put it
    path: path.resolve(__dirname, 'dist/assets'), //__dirname is absolute URL to project folder relative to the root, then path to the folder
    filename: 'bundle.js'
  },
  devServer: {
    static: {
      directory: path.join(__dirname, "dist"),
    },
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      use: {
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env']
        }
      }
    }]
  }
};


