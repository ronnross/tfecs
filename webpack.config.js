const { resolve } = require('path');
const fromProject = path => resolve(__dirname, path);
module.exports = {
  entry: fromProject('src/index.js'),
  output: {
    path: fromProject('public'),
    filename: 'bundle.js'
  },
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: []
};
