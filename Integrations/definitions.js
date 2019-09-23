const axios = require("axios");
const chalk = require("chalk");

module.exports = async word => {
  try {
    let count = 1;
    let defWord = "";
    let { data } = await axios(
      `https://www.wordsapi.com/mashape/words/${word}/definitions?when=2019-09-22T04:54:32.039Z&encrypted=8cfdb283e7229a9be89307bfeb58bbbdaeb32f0930fc9eb8`
    );

    if (data.definitions.length) {
      data.definitions.map(obj => {
        defWord = chalk.green(`${count++}] ${obj.definition}`);
        console.log(defWord);
      });
    } else {
      defWord = chalk.red(`No Definitions Available for "${word}"`);
      console.log(defWord);
    }
  } catch (error) {
    const log = chalk.red(`No Definitions Available for "${word}"`);
    console.log(log);
  }
};
