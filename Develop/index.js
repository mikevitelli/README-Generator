//link inquirer
var inquirer = require("inquirer");
var fs = require("fs");
var fileName = "goodReadMe.md";

// array of questions for user
const questions = [
  //project name
  {
    type: "input",
    message: "what is the title of your project?",
    name: "projectTitle",
  },
  //
];

// function to write README file
function writeToFile(fileName, data) {
  //populates the read me file
  fs.writeFile(fileName, data, function (err) {
    if (err) {
      return console.log(err);
    }
    console.log("Success!");
  });
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then(function (response) {
    writeToFile(fileName, response);
  });
}

// function call to initialize program
init();
