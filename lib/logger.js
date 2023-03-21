const chalk = require("chalk");
const ora = require("ora");

class Logger {
  static ora;
  constructor() {
    this.ora = ora("");
  }
  stop() {
    this.ora.stop();
  }
  setText(text) {
    this.ora.text = text;
  }
  loading(text, color = "white") {
    this.setText(chalk[color](text));
    this.ora.start();
  }
  success(text, color = "green") {
    this.ora.succeed(chalk[color](text));
  }
  warning(text, color = "yellow") {
    this.ora.warn(chalk[color](text));
  }
  fatal(text, color = "red") {
    this.ora.fail(chalk[color](text));
  }
  info(text, color = "white") {
    this.ora.info(chalk[color](text));
  }
  blank(num = 1) {
    for (let i = 0; i < num; i++) {
      console.log();
    }
  }
}

module.exports = Logger;
