//function that returns a license badge based on which license is passed in
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

//function to generate markdown for README that pulls the answers provided 
function generateMarkdown(data) {
  return `# ${data.Title}

  ## Description

  ${data.Description}
  ${data.License}

  ## Table of Contents

  - [Installation](#installation)
  - [Usage](#usage)
  - [Contribution](#contribution)
  - [Tests]
  - [License](#license)
  - [Questions]

  ## Installation

  ${data.Install}

  ## Usage

  ${data.Usage}

  ## Contribution

  ${data.Contributions}

  ## Tests

  ${data.Tests}

  ## License

  ${renderLicenseBadge(data.License)} 
  Click for more information about this license

  ---

  ## Questions

  For further clarifications or questions, I can be reached at:
  ${data.Email}

  ${data.Github}
  `
}

module.exports = generateMarkdown;
