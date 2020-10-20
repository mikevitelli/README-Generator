//link inquirer
var inquirer = require("inquirer");
//link FS
var fs = require("fs");

const generateMarkdown = require("./Develop/utils/generateMarkdown.js");

// var fileName = "goodReadMe.md";

// array of questions for user
const questions = [
  //project / input
  {
    type: "input",
    message: "what is the title of your project?",
    name: "title",
  },
  //description / input
  {
    type: "input",
    message: "What is it?",
    name: "description",
  },
  //installation / input
  {
    type: "input",
    message: "How do you install it?",
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
    message: "Who made it?",
    name: "credits",
  },
  //license / choice
  {
    type: "checkbox",
    message: "What liscense you rockin' with?",
    name: "license",
    choices: ["MIT", "GPLv3", "The Unlicense"],
  },
];

// function to write README file
function writeToFile(fileName, data) {
  var fileName = "auto-generated-README.md";
  //populates the read me file
  fs.writeFile(fileName, data, function (err) {
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
  inquirer.prompt(questions).then(function (response) {
    writeToFile(fileName, generateMarkdown(response));
  });
}

// function call to initialize program
init();
