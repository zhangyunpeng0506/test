const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');
const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  plugins: [
    new UglifyWebpackPlugin() //压缩丑化js
  ],
});