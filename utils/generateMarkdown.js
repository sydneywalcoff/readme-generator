// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license) {
    license = license.split("-").join("--");
    return `![license](https://img.shields.io/badge/license-${license}-green)`
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license) {
    return `View more information on this license at: [opensource.org/licenses/${license}](opensource.org/licenses/${license})
    `
  } else {
    return ``;
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `
## License
${renderLicenseLink(license)}`
  } else {
    return ``;
  }
}

function renderTocLicense(license) {
  if(license) {
    return `
* [License](#license)`
  } else {
    return ``
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title} ${renderLicenseBadge(data.license)}

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage) ${renderTocLicense(data.license)}
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}
${renderLicenseSection(data.license)}
## Contributing
${data.contribution}

## Tests
${data.test}

## Questions
Questions? Reach out at [github.com/${data.github}](github.com/${data.github}) or ${data.email}
  `;
}

module.exports = generateMarkdown;
