// pull packages being used to main file
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// list of all the quetions - using the prompt feature from inquirer
inquirer
  .prompt([
    {
        type: 'input',
        message: 'What is your project title?',
        name: 'Title',
    },
    {
        type: 'input',
        message: 'Provide short description of your project:',
        name: 'Description',
    },
    {
        type: 'input',
        message: 'What are the steps required for installation? What command is used to install dependencies?',
        name: 'Install',
    },
    {
        type: 'input',
        message: 'What are the instructions for use?',
        name: 'Usage',
    },
    {
        type: 'input',
        message: 'How can someone contribute to the repo?',
        name: 'Contributions',
    },
    {
        type: 'input',
        message: 'What command should be used to run tests?',
        name: 'Tests',
    },
    {
        type: 'list',
        message: 'Provide license info:',
        name: 'License',
        choices: ['MIT', "Apache", 'GNU General Public License', "other/none"]
    },
    {
        type: 'input',
        message: 'What is your github username?',
        name: 'Github',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'Email',
    },
])
// after all the questions are answered, create a readme file, run through the generateMarkdown function using the answers from the questions
    .then((data) =>
        fs.writeFile('README.md', generateMarkdown(data), (error) => error ? console.error(error) : console.log("Using info provided to make README file...")
        )
    );