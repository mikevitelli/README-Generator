//link inquirer
const inquirer = require("inquirer");
//link FS
const fs = require("fs");

const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

// var fileName = "goodReadMe.md";

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
  //credits / input
  {
    type: "input",
    message: "What is your Github username?",
    name: "credits",
  },
  //license / choice
  {
    type: "checkbox",
    message: "What license are you using?",
    name: "license",
    choices: ["MIT", "GPLv3", "The Unlicense"],
  },
  //tests
  {
    type: "input",
    message: "insert tests question here",
    name: "tests",
  },
  //questions
  {
    type: "input",
    message: "insert 'questons' prompt here",
    name: "questions",
  },
];

// function to write README file
function writeToFile(fileName, data) {
  var fileName = "auto-generated-README.md";
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

// function to initialize program
function init(fileName) {
  //asks questions array, takes the responses and passes them to the other function generateMarkdown, which styles the readme
  inquirer.prompt(questions).then((response) => {
    writeToFile(fileName, generateMarkdown(response));
  });
}

// function call to initialize program
init();
