var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var CompressionPlugin = require('compression-webpack-plugin');
var CommonChunkPlugin = webpack.optimize.CommonChunkPlugin;
var commonConfig = require('./webpack.config.common.js');

module.exports = webpackMerge.smart(commonConfig, {
  debug: false,
  profile: true,
  devtool: false,
  entry: {
    'polyfills': '../public/src/polyfills'
    'app': '../public/src/main.aot'
  },

  output: {
    path: '../public/js/app',
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
      compress: {
        warnings: false
      },
      output: {
        comments: false
      },
      sourceMap: false
    }),
    new CompressionPlugin({
      asset: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.js$|\.html$/,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  node: {
    __filename: true
  },
  devServer: {
    inline: true,
    port: 8080,
    historyApiFallback: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: 1000
    }
  }
});
