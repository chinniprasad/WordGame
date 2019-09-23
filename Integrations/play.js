const chalk = require("chalk");
const axios = require("axios");
const readline = require("readline");
const randomWord = require("./randomWord");
const allDetails = require("./allDetails");

module.exports = async () => {
  let status = "";
  let random = await randomWord();
  let synonyms = await apiCallForSyn(random.word);
  console.log(chalk.blue(synonyms.synonyms[0]));

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question("Please enter word for above synonym ? ", async word => {
    let checkData = await check(synonyms, word);
    if (checkData) {
      status = chalk.blue("Entered word is correct");
      console.log(status);
      process.exit(0);
    } else {
      rl.question("Try again ? ", async word1 => {
        let checkData = await check(synonyms, word1);
        if (checkData) {
          status = chalk.blue("Entered word is correct");
          console.log(status);
          process.exit(0);
        } else {
          console.log("hint::");
          let definitions = await apiCallForDef(random.word);
          console.log(chalk.blue(definitions.definitions[0].definition));
          rl.question("Lets Enter again ? ", async word2 => {
            let checkData = await check(synonyms, word2);
            if (checkData) {
              status = chalk.blue("Entered word is correct");
              console.log(status);
              process.exit(0);
            } else {
              await allDetails(random.word);
              process.exit(0);
            }
          });
        }
      });
    }
  });

  rl.on("close", function() {
    console.log("\nBYE BYE !!!");
    process.exit(0);
  });
};

apiCallForSyn = async word => {
  let { data } = await axios(
    `https://www.wordsapi.com/mashape/words/${word}/synonyms?when=2019-09-22T04:54:32.039Z&encrypted=8cfdb283e7229a9be89307bfeb58bbbdaeb32f0930fc9eb8`
  );
  return data;
};
apiCallForDef = async word => {
  let { data } = await axios(
    `https://www.wordsapi.com/mashape/words/${word}/definitions?when=2019-09-22T04:54:32.039Z&encrypted=8cfdb283e7229a9be89307bfeb58bbbdaeb32f0930fc9eb8`
  );
  return data;
};

check = (synonyms, word) => {
  let data = synonyms.synonyms.map(obj => {
    if (obj == word) {
      return true;
    }
  });
  [data] = data.filter(function(element) {
    return element !== undefined;
  });
  return data;
};
