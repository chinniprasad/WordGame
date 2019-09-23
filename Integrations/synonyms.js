const axios = require("axios");
const chalk = require("chalk");

module.exports = async word => {
  try {
    let count = 1;
    let synWord = "";
    let { data } = await axios(
      `https://www.wordsapi.com/mashape/words/${word}/synonyms?when=2019-09-22T04:54:32.039Z&encrypted=8cfdb283e7229a9be89307bfeb58bbbdaeb32f0930fc9eb8`
    );
    if (data.synonyms.length) {
      data.synonyms.map(obj => {
        synWord = chalk.green(`${count++}] ${obj}`);
        console.log(synWord);
      });
    } else {
      synWord = chalk.red(`No Synonms Available for "${word}"`);
      console.log(synWord);
    }
  } catch (error) {
    const log = chalk.red(`No Synonms Available for "${word}"`);
    console.log(log);
  }
};
