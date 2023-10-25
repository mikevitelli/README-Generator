questions = [
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
        return console.log("You must enter your username.");
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
        return console.log("You must enter the license of your project.");
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
        return console.log("You must choose a button color.");
      }
      return true;
    },
  },
];

module.exports = questions;
