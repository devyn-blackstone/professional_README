// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT" ){
    return "[![License](https://img.shields.io/badge/license-MIT-blueviolet)](https://choosealicense.com/licenses/mit/)";
  }
  else if (license === "Apache"){
    return "[![License](https://img.shields.io/badge/license-Apache-blueviolet)](https://opensource.org/licenses/Apache-2.0)";
  }
  else if (license === "GPL"){
    return "[![License](https://img.shields.io/badge/license-GPL-blueviolet)]()";
  }
  else {
    return "[![License](https://img.shields.io/badge/%20no%20license-unlicense-blueviolet)]";
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description

  ${data.Description}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Credits](#credits)
  - [License](#license)

  ## Installation

  ${data.Installation}

  ## Usage

  ${data.Usage}

  ## Credits

  ${data.Credits}

  ## License

  ${renderLicenseBadge(data.License)}

  ---

  ## Contact

  ${data.Email}

  ${data.Github}
  `
}

module.exports = generateMarkdown;
