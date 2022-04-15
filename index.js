// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

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
        type: 'list',
        message: 'Provide license info:',
        name: 'License',
        choices: ['MIT', "Apache", 'GPL', "other/none"]
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
    .then((data) =>
        fs.writeFile('README.md', generateMarkdown(data), (error) => error ? console.error(error) : console.log("Using info provided to make README file...")
        )
    );