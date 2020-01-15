const chalk = require("chalk");

const success = chalk.green;
const error = chalk.bold.red;
const warning = chalk.keyword("orange");

module.exports = {
  success: success,
  error: error,
  warning: warning
};
