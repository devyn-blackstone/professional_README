// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'Title',
    },
    {
      type: 'input',
      message: 'Provide short description of your project',
      name: 'Description',
    },
    {
        type: 'input',
        message: 'What are the steps required for installation?',
        name: 'Install',
    },
    {
        type: 'input',
        message: 'What are the instructions for use?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'List your collaborators:',
        name: 'Credits',
    },
    {
        type: 'input',
        message: 'Provide license info:',
        name: 'License',
    },
    {
        type: 'input',
        message: 'List for badges:',
        name: 'Badges',
    },
])
    .then((response) =>
    fs.appendFile('log.txt', JSON.stringify(response), (error) => error ? console.error(error) : console.log(response)
    )
    );
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
