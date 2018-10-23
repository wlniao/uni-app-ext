const base = require('./base')
const webpackMerge = require('webpack-merge')
const BabiliPlugin = require('babili-webpack-plugin')
const htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = webpackMerge(base, {
  plugins:[
    new BabiliPlugin(),
    new htmlWebpackPlugin({'title':'zdy','filename':'index.html','template':'index.html'})
  ]
});