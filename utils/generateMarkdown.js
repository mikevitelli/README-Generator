// function to generate markdown for README
function generateMarkdown({
  title,
  description,
  install,
  usage,
  tests,
  questions,
  credits,
  license,
  color,
}) {
  return `# ${title}

  ## Description

  ${description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${install}

  ## Usage

  ${usage}

  ## Tests

  ${tests}

  ## Questions

  ${questions}
  
  ## Credits

  [@${credits}](https://github.com/${credits})

  ## License
  
  [![License: ${license}](https://img.shields.io/badge/license-${license}-${color}.svg)](http://${license}.org/)
`;
}

module.exports = generateMarkdown;
