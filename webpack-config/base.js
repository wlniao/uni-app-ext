const path = require('path')
const webpack = require("webpack")
const htmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
  entry: './src/main.js',
  // 不处理应用的依赖库（减少打包后的体积）
  externals: {
    'vue': 'Vue',
    "vuex": "Vuex",
    "vue-router": "VueRouter"
  },
  output: {
    publicPath: '/', //js文件的相对映射路径
    path: path.resolve(__dirname, '../dist'),
    filename: 'js/app.js',
    library: 'app'
  },
  plugins:[
    new ExtractTextPlugin("[name].css")
  ],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        // include: [path.resolve('src')],
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      'static': path.resolve(__dirname, '../static')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: false
  },
  performance: {
    hints: false
  },
  devtool: false
  // devtool: '#eval-source-map'
};