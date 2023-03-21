const path = require("path");
const userConfig = require("../config/user");
const registryConfig = require("../config/registry");

/**
 * 转换路径为完整路径
 * @param {*} pathname 相对路径
 * @returns 完整路径
 */
function resolve(pathname) {
  return path.resolve(__dirname, pathname);
}

/**
 * 根据配置项名判断路径并修改对应文件
 * @param arg 配置项名
 * @returns 配置项对象
 */
function checkConfig(arg) {
  let configList = [
    { config: userConfig, path: resolve("../config/user.json") },
    { config: registryConfig, path: resolve("../config/registry.json") },
  ];
  let configObj = configList.find(({ config }) => Object.keys(config).includes(arg));
  return configObj;
}

module.exports = {
  resolve,
  checkConfig,
};
