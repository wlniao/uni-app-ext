const base = require('./base')
const webpack = require("webpack")
const webpackMerge = require('webpack-merge')
module.exports = webpackMerge(base, {  
  entry: './src/main.js',
  devtool: '#eval-source-map',
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      compress: {   //压缩代码
        dead_code: true,  //移除没被引用的代码
        warnings: false,   //当删除没有用处的代码时，显示警告
        loops: true //当do、while 、 for循环的判断条件可以确定是，对其进行优化
      },
      except: ['$super', '$', 'exports', 'require']  //混淆,并排除关键字
    })
  ]
});