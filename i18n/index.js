const language = require("../config/user.json").language;

const map = {
  zh: require("./zh"),
  en: require("./en"),
};

module.exports = map[language];
