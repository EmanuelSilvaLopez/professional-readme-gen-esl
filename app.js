const inquirer = require('inquirer');
const generatePage = require('./src/page-template');
const { writeFile, copyFile } = require('./utils/generate-site');

const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is your project title? (Required)',
      validate: titleInput => {
        if (titleInput) {
          return true;
        } else {
          console.log('You must enter a project title');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'description',
      message: 'Describe your project! (Required)',
      validate: descriptionInput => {
        if (descriptionInput) {
          return true;
        } else {
          console.log('You must describe your project!');
          return false;
        }
      }
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage of this project?'
    },
    {
      type: 'list',
      name: 'license',
      choices: ["GNU AGPLv3", "GNU GPLv3", "GNU LGPLv3", "Mozilla Public License 2.0", "Apache License 2.0", "MIT License", "Boost Software License 1.0"]
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Are there any installation instructions?'
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'How would you like others to contribute?'
    },
    {
      type: 'input',
      name: 'test',
      message: 'How would you test this application?'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'What sources would you like to credit?'
    },
    {
      type: 'input',
      name: 'username',
      message: 'What is your github username? (Required)',
      validate: usernameInput => {
        if (usernameInput) {
          return true;
        } else {
          console.log('You must enter your username!');
          return false;
        }
      }
    }
  ]);
};