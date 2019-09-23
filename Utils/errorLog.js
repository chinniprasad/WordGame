// used to log errors to the console in red color

const chalk = require("chalk");

module.exports = (error) => {
    const eLog = chalk.red(error)
    console.log(eLog)
  }