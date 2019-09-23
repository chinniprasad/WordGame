const axios = require("axios");
const chalk = require("chalk");

module.exports = async word => {
  try {
    let count = 1;
    let defWord = "";
    let { data } = await axios(
      `https://www.wordsapi.com/mashape/words/${word}/examples?when=2019-09-22T04:54:32.039Z&encrypted=8cfdb283e7229a9be89307bfeb58bbbdaeb32f0930fc9eb8`
    );
    if (data.examples.length) {
      data.examples.map(obj => {
        defWord = chalk.green(`${count++}] ${obj}`);
        console.log(defWord);
      });
    } else {
      defWord = chalk.red(`No Examples Available for "${word}"`);
      console.log(defWord);
    }
  } catch (error) {
    const log = chalk.red(`No Examples Available for "${word}"`);
    console.log(log);
  }
};
