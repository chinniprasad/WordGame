const axios = require("axios");
const chalk = require("chalk");

module.exports = async word => {
  try {
    let count = 1;
    let allDetails = "";
    let { data } = await axios(
      `https://www.wordsapi.com/mashape/words/${word}?when=2019-09-22T04:54:32.039Z&encrypted=8cfdb283e7229a9be89307bfeb58bbbdaeb32f0930fc9eb8`
    );

    if (data.results.length) {
      let result = data.results[0];
      let ant = result.antonyms ? result.antonyms : "No data";
      let syn = result.synonyms ? result.synonyms : "No data";
      let ex = result.examples ? result.examples : "No data";
      let def = result.definition ? result.definition : "No data";

      console.log(chalk.green(`definition : ${def}`));
      console.log(chalk.green(`synonyms : ${syn}`));
      console.log(chalk.green(`antonyms : ${ant}`));
      console.log(chalk.green(`example : ${ex}`));
    } else {
      allDetails = chalk.red(`No Data Available for "${word}"`);
      console.log(allDetails);
    }
  } catch (error) {
    const log = chalk.red(`No Data Available for "${word}"`);
    console.log(log);
  }
};
