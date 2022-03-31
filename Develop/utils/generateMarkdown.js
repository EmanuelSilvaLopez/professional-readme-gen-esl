// TODO: Create a function that returns a license badge based on which license is passed in
const licenseArray = ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0"]
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license===licenseArray[0]) {
    return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)"
  } else if (license===licenseArray[1]) {
    return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
  } else if (license===licenseArray[2]) {
    return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL%20v2.1-blue.svg)](https://www.gnu.org/licenses/lgpl-2.1)"
  } else if (license===licenseArray[3]) {
    return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)"
  } else if (license===licenseArray[4]) {
    return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)]"
  } else if (license===licenseArray[5]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
  } else if (license===licenseArray[6]) {
    return "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
  } else {
    return ""
  }
};

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license===licenseArray[0]){
    return `[${licenseArray[0]}](https://www.gnu.org/licenses/agpl-3.0)`
  } else if (license===licenseArray[1]){
    return `[${licenseArray[1]}](https://www.gnu.org/licenses/gpl-3.0)`
  } else if (license===licenseArray[2]){
    return `[${licenseArray[2]}](https://www.gnu.org/licenses/lgpl-2.1)`
  } else if (license===licenseArray[3]){
    return `[${licenseArray[3]}](https://opensource.org/licenses/MPL-2.0)`
  } else if (license===licenseArray[4]){
    return `[${licenseArray[4]}](https://opensource.org/licenses/Apache-2.0)`
  } else if (license===licenseArray[5]){
    return `[${licenseArray[5]}](https://opensource.org/licenses/MIT)`
  } else if (license===licenseArray[6]){
    return `[${licenseArray[6]}](https://www.boost.org/LICENSE_1_0.txt)`
  } else {
    return ""
  }
};

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license===licenseArray[0]){
    return `Read more about ${licenseArray[0]} here:`
  } else if (license===licenseArray[1]){
    return `Read more about ${licenseArray[1]} here:`
  } else if (license===licenseArray[2]){
    return `Read more about ${licenseArray[2]} here:`
  } else if (license===licenseArray[3]){
    return `Read more about ${licenseArray[3]} here:`
  } else if (license===licenseArray[4]){
    return `Read more about ${licenseArray[4]} here:`
  } else if (license===licenseArray[5]){
    return `Read more about ${licenseArray[5]} here:`
  }  else if (license===licenseArray[6]){
    return `Read more about ${licenseArray[6]} here:`
  } else {
    return " "
  }
};

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Badges
  ${renderLicenseBadge(data.license)}

  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [How to Contribute](#how-to-contribute)
  * [Tests](#tests)
  * [Questions?](#questions)
  
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}

  ## Description
  ${data.description}

  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## How to Contribute
  ${data.contribute}

  ## Tests
  ${data.test}

  ## Questions?
  ### Reach me here:
  [${data.username}](https://github.com/${data.username})
  ${data.email}

`;
}

module.exports = generateMarkdown;
