const baseModule = require('./webpack-config/base');
const buildModule = require('./webpack-config/build');
const devModule = require('./webpack-config/dev');
let finalModule = {};
let ENV = process.env.NODE_ENV;     //此处变量可由命令行传入
switch (ENV) {
  case 'build':
    finalModule = buildModule;
    break;
  case 'dev':
    finalModule = devModule;
    break;
  default:
    finalModule = baseModule;
    break;
}
module.exports = finalModule;