// function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}


  ## Description

  ${data.description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.install}

  ## Usage

  ${data.usage}

  ## Tests

  ${data.tests}

  ## Questions

  ${data.questions}
  
  ## Credits

  ${data.credits}

  ## License

  ${data.license}
  
  [![GitHub license](https://img.shields.io/github/license/Naereen/StrapDown.js.svg)](https://github.com/Naereen/StrapDown.js/blob/master/LICENSE)
`;
}

module.exports = generateMarkdown;
