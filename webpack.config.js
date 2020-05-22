const path = require('path');

module.exports = {
  entry: './src/main.js',
  output: {
    path: path.resolve(__dirname,'dist'),
    filename: 'bundle.js'
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
      }
    ]
  },
}