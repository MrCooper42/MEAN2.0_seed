var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var CompressionPlugin = require('compression-webpack-plugin');
var CommonChunkPlugin = webpack.optimize.CommonChunkPlugin;
var commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge.smart(commonConfig, {
  entry: {
    // 'polyfills': '../public/src/polyfills'
    'app': './public/src/main.aot'
  },

  output: {
    path: './public/js/app',
    filename: 'bundle.js',
    publicPath: '/js/app/',
    chunkFilename: '[id].[hash].chunk.js'
  },

  module: {
    loaders: [
      {
        test: /\.ts$/,
        loaders: ['awesome-typescript-loader', 'angular2-template-loader', 'angular2-router-loader?aot=true&genDir=public/js/app']
      }
    ]
  },

  plugins: [
      new webpack.NoErrorsPlugin(),
      new webpack.optimize.UglifyJsPlugin({
          sourceMap: false
      })
  ]
});
