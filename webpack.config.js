const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js',
    publicPath:'dist/'  //涉及任何url相关的都会加上
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
      }
    ]
  },
}