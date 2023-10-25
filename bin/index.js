const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const api = require("../utils/api.js");
const generateMarkdown = require("../utils/generateMarkdown.js");
const questions = require("../utils/questions.js");
const config = require("../utils/config.js");

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error("Error writing the file:", err);
    } else {
      console.log("Success! Your document is ready for use!");
    }
  });
}

const writeFileAsync = util.promisify(writeToFile);

async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);
    const userInfo = await api.getUser(userResponses);
    const markdownFile = await generateMarkdown(userResponses, userInfo);
    await writeFileAsync(config.outputFilename, markdownFile);
  } catch (error) {
    console.error("An error occurred:", error);
    // try again handling
    const { retry } = await inquirer.prompt([
      {
        type: "confirm",
        name: "retry",
        message: "Would you like to retry?",
      },
    ]);
    if (retry) {
      init();
    } else {
      console.log("Exiting the program. Try again next time :)");
    }
  }
}

init();
