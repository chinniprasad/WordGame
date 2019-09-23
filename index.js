#!/usr/bin/env node

const definitions = require("./Integrations/definitions");
const antonyms = require("./Integrations/antonyms");
const synonyms = require("./Integrations/synonyms");
const examples = require("./Integrations/examples");
const allDetails = require("./Integrations/allDetails");
const wordOfTheDay = require("./Integrations/wordOfTheDay");
const play = require("./Integrations/play");
const usage = require("./Utils/usage");
const errorLog = require("./Utils/errorLog");
const args = process.argv;
const commands = ["def", "syn", "ant", "ex", "dict", "play", "help"];

function wordGame() {
  if (!args[2]) {
    wordOfTheDay();
  } else {
    switch (args[2]) {
      case "help":
        usage();
        break;
      case "def":
        definitions(args[3]);
        break;
      case "syn":
        synonyms(args[3]);
        break;
      case "ant":
        antonyms(args[3]);
        break;
      case "ex":
        examples(args[3]);
        break;
      case "dict":
        allDetails(args[3]);
        break;
      case "play":
        play();
        break;
      default:
        if (commands.indexOf(args[2]) == -1) {
          errorLog("invalid command passed");
          usage();
        }
        break;
    }
  }
}
wordGame()
