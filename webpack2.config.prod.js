import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

let theOutputFile = 'dist';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  outputFile: theOutputFile, //used in build.js
  entry: [
    path.resolve(__dirname, 'src/index')
  ],
  target: 'web',
  output: {
    path: path.resolve(__dirname, theOutputFile),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    // Create HTML file that includes reference to bundle JS.
    new HtmlWebpackPlugin( {
      template: 'src/index.html',
      inject: true
    } ),

    // Eliminates duplicate packages when generating bundles
    new webpack.optimize.DedupePlugin(),
    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
