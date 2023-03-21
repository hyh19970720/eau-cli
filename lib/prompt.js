const fs = require("fs");
const inquirer = require("inquirer");
const chalk = require("chalk");
const templates = require("../config/registry.json").templates;
const Logger = require("../lib/logger");
const i18n = require("../i18n");

const spanner = new Logger();

const prompt = [
  {
    if: true,
    type: "input",
    name: "projectName",
    message: i18n.propmts.projectName,
    default: "my-project",
    validate: (val) => {
      let reg = new RegExp(/^[A-Za-z][A-Za-z0-9\-]+$/);
      if (reg.test(val)) {
        pathExist(val);
        return true;
      } else {
        console.log(chalk.yellow("  " + i18n.propmts.projectNameErr));
        return;
      }
    },
  },
  {
    if: false,
    type: "list",
    name: "isExist",
    message: i18n.propmts.isExist,
    choices: [
      { name: i18n.propmts.isExistOps[0], value: true },
      { name: i18n.propmts.isExistOps[1], value: false },
    ],
    default: true,
    filter: (val) => {
      if (!val) {
        return process.exit(1);
      }
      return val;
    },
  },
  {
    if: true,
    type: "list",
    name: "template",
    message: i18n.propmts.template,
    choices: templates.map((t) => ({ name: t.name, value: t })),
    filter: (val) => {
      if (!val.ssh) {
        prompt.find((it) => it.name === "useSSH").if = false;
      }
      return val;
    },
  },
  {
    if: true,
    type: "confirm",
    name: "useSSH",
    message: i18n.propmts.useSSH,
  },
];

/**
 * 判断目录是否已存在
 * @param {*} pn 目录名称
 */
function pathExist(pn) {
  const files = fs.readdirSync(".");
  if (files.includes(pn)) {
    prompt.find((it) => it.name === "isExist").if = true;
    return true;
  }
}

module.exports = async function inquirerPrompt(projectName) {
  let result = { useSSH: false };
  if (projectName) {
    prompt.find((it) => it.name === "projectName").if = false;
    result.projectName = projectName;
    pathExist(projectName);
  }
  // 遍历prompt，过滤掉不需要展示的问题（if为false）
  for (let i = 0; i < prompt.length; i++) {
    let p = prompt[i];
    if (!p.if) continue;
    const res = await inquirer.prompt([p]);
    Object.assign(result, res);
  }
  return result;
};
