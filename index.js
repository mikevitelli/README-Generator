//link inquirer
const inquirer = require("./utils/node_modules/inquirer");
//link FS
const fs = require("fs");
const util = require("./utils/node_modules/util");

const api = require("./utils/api.js");

const generateMarkdown = require("./utils/generateMarkdown.js");
// const { async } = require("rxjs");

// array of questions for user
const questions = [
  //project / input
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
  },
  //description / input
  {
    type: "input",
    message: "Give a brief description of the project.",
    name: "description",
  },
  //installation / input
  {
    type: "input",
    message: "How does the user install it?",
    name: "install",
  },
  //usage
  {
    type: "input",
    message: "How do you use it?",
    name: "usage",
  },
  //tests
  {
    type: "input",
    message: "What are the test instructions?",
    name: "tests",
  },
  //questions
  {
    type: "input",
    message: "How should any users direct their questions?",
    name: "questions",
  },
  //credits / input
  {
    type: "input",
    message: "What is your Github username?",
    name: "credits",
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("You must enter the title of your project.");
      }
      return true;
    },
  },
  //license / choice
  {
    type: "checkbox",
    message: "What license are you using?",
    name: "license",
    choices: ["MIT", "GPLv3", "The Unlicense"],
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("You must enter the title of your project.");
      }
      return true;
    },
  },
  {
    type: "checkbox",
    message: "What color do you want your button?",
    name: "color",
    choices: ["red", "blue", "orange", "yellow"],
    validate: function (answer) {
      if (answer.length < 1) {
        return console.log("You must enter the title of your project.");
      }
      return true;
    },
  },
];

// function to write README file
function writeToFile(fileName, data) {
  fileName = "auto-generated-README.md";
  //populates the read me file
  fs.writeFile(fileName, data, (err) => {
    // if error, log the error
    if (err) {
      return console.log(err);
    }
    // if it works
    console.log("Success! Your document is ready for use!");
  });
}

const writeFileAsync = util.promisify(writeToFile);

async function init() {
  try {
    const userResponses = await inquirer.prompt(questions);
    // after questions are answered, return responses
    console.log("Your responses (in case you somehow forgot)", userResponses);

    //make call with github api
    const userInfo = await api.getUser(userResponses);

    //pass data from inquirer and api to markdown file
    const markdownFile = generateMarkdown(userResponses, userInfo);

    //write file
    await writeFileAsync("AUTO-README.md", markdownFile);
  } catch (error) {
    console.log(error);
  }
}

// function call to initialize program
init();
