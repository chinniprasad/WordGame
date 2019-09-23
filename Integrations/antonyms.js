const axios = require("axios");
const chalk = require("chalk");

module.exports = async word => {
  try {
    let count = 1;
    let antWord = "";
    let { data } = await axios(
      `https://www.wordsapi.com/mashape/words/${word}/antonyms?when=2019-09-22T04:54:32.039Z&encrypted=8cfdb283e7229a9be89307bfeb58bbbdaeb32f0930fc9eb8`
    );
    if (data.antonyms.length) {
      data.antonyms.map(obj => {
        antWord = chalk.green(`${count++}] ${obj}`);
        console.log(antWord);
        return obj;
      });
    } else {
      antWord = chalk.red(`No Antonyms Available for "${word}"`);
      console.log(antWord);
    }
  } catch (error) {
    const log = chalk.red(`No Antonyms Available for "${word}"`);
    console.log(log);
  }
};
