const webpackMerge = require('webpack-merge');
const baseConfig = require('./base.config');

module.exports = webpackMerge(baseConfig, {
  devServer: {
    contentBase: './dist', //服务的文件件
    inline: true, //是否实时
    port: '55269' //指定端口
  }
});