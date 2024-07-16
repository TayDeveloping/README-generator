// Import Required Modules
const fs = require('fs');
const inquirer = require('inquirer');

// Define Questions
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'How do you install your project?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'How do you use your project?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'How can others contribute to your project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you test your project?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'GNU GPLv3', 'Apache License 2.0', 'BSD 3-Clause'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
];

// Generate README Content
function generateReadme(answers) {
  return `
# ${answers.title}

![License](https://img.shields.io/badge/license-${answers.license}-blue.svg)

## Description
${answers.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation
${answers.installation}

## Usage
${answers.usage}

## License
This project is licensed under the ${answers.license} license.

## Contributing
${answers.contributing}

## Tests
${answers.tests}

## Questions
For any questions, please contact me with the information below:

GitHub: [${answers.github}](https://github.com/${answers.github})
Email: [${answers.email}](mailto:${answers.email})
`;
}

// Prompt User for Input
inquirer.prompt(questions).then((answers) => {
  const readmeContent = generateReadme(answers);
  fs.writeFile('README.md', readmeContent, (err) => {
    if (err) {
      console.error('Error writing README.md:', err);
    } else {
      console.log('README.md generated successfully!');
    }
  });
});
