const path = require('path');
const webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  entry: {
    rss_polling: './packages/rss_polling/app-lambda.js'
  },
  target: 'node',
  optimization: {
    nodeEnv: false
  },
  output: {
    path: path.resolve(__dirname, 'dist'), 
    filename: '[name]/index.js', 
    libraryTarget: 'commonjs2', // Required for Lambda handler export
  },
  mode: 'production', 
  externals: ['aws-sdk'],
  module: {
    rules: [],
  },
  resolve: {
    alias: {
      config: path.resolve(__dirname, 'config.js') // Shortcut for shared config
    }
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: './packages/rss_polling/.env.json', to: 'rss_polling/' },
      ]
    }),
  ],
};
