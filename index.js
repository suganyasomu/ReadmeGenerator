const fs = require("fs");
const inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is title of the project?",
      name: "title",
    },
    {
      type: "input",
      message: "What is the name of the repo?",
      name: "repo",
    },
    {
      type: "input",
      message: "Write a description?",
      name: "description",
    },
    {
      type: "input",
      message: "Installation Instructions",
      name: "installation",
    },
    {
      type: "input",
      message: "Describe usage?",
      name: "usage",
    },
    {
      type: "list",
      message: "Choose a license.",
      name: "license",
      choices: [
        "MIT license",
        "Apache license",
        "GPL License",
        "Public Domain(unlicensed)",
      ],
    },
    {
      type: "input",
      message: "Write are the rules for contributing?",
      name: "contributing",
    },
    {
      type: "input",
      message: "Run tests here",
      name: "tests",
    },
    {
      type: "input",
      message: "Enter Github username",
      name: "username",
    },
    {
      type: "input",
      message: "Enter email",
      name: "email",
    },
  ])
  .then(function (response) {
    const readMeString = `# ${response.title}
![GitHub repo size](https://img.shields.io/github/repo-size/${response.username}/${response.repo})

## Table of Contents

* [Title](#title)
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [Tests](#tests)
* [License](#license)
* [Questions](#questions)
        
## Description
${response.description}

## Installation
${response.installation}
        
## License
Distributed under  ${response.license}. 

## Usage
${response.usage}

## contributing
${response.contributing}

## tests
${response.tests}

## Questions
Github repo link : www.github.com/${response.username}

If you have any questions reach out to me at ${response.email}.
`;
    console.log(readMeString);

    fs.writeFile("README.md", readMeString, (err) => {
      if (err) throw err;
      console.log("success!");
    });
  });
