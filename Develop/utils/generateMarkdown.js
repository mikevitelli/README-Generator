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

  ## Credits

  ${data.credits}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
