// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  https://github.com/${data.username}/${data.title}
  #Description
  ${data.Description}
  # Table of Contents
  *[Installation](#installation)
  *[usage](#usage)
  *[License](#license)
  *[Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  # Installation
  The following necassary dependecies must be installed to run the application
  ${data.Installation}
  # Usage 
  In order to use this app, ${data.usage}
  #Licence
  This project is licensed under the ${data.License} license.
  ![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)
  #  Contributing
  contributors: ${data.Contributing}
  #Tests
  the following is need to run the test ${data.Tests}
  #Questions
  If you have any questions about the repo, run an issue or contact ${data.Questions}



`;
}

module.exports = generateMarkdown;
