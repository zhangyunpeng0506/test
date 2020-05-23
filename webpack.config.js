const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const UglifyWebpackPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    // publicPath:'dist/'  //涉及任何url相关的都会加上
  },
  module:{
    rules:[
      {
        test:/\.js$/,
        exclude: /node_modules/,  //将node_modules文件夹排除在外
        use:{
          loader:'babel-loader' //将ES6格式转换成ES5
        }
      },
      {
        test:/\.css$/,
        use:['style-loader','css-loader']
      },
      {
        test: /\.less$/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'less-loader' }
        ]
      },
      {
        test: /\.(png|gif|jpg|jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              //当加载的图片小于limit，会将图片编译成base64字符串形式
              //当加载的图片大于limit，会使用file-loader
              limit: 8196,
              name: 'img/[name].[hash:8].[ext]' //图片压缩命名规范
            },
          }
        ]
      },
      {
        test: /\.vue$/,
        use: {
          loader:'vue-loader'
        }
      }
    ]
  },
  resolve: {
    //alias：别名
    alias: {
      'vue$':'vue/dist/vue.esm.js'
    },
    extensions:['.js','.css','.vue']
  },
  plugins: [
    new webpack.BannerPlugin(`最终版权归zyp所有`), //js头部注释
    new HtmlWebpackPlugin({ //在dist内生成一个index.html
      template:'index.html'
    }),
    // new UglifyWebpackPlugin() //压缩丑化js
  ],
  devServer: {
    contentBase: './dist', //服务的文件
    inline: true, //是否实时
    port: '55269' //指定端口
  }
}