// TODO: Include packages needed for this application
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'projectTitle',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions.'
    },
    {
        type: 'list',
        name: 'licenses',
        message: 'What kind of license do you want to include?',
        choices: ['None', 'MIT', 'Apache License 2.0', 'GNU GPLv3', 'ISC']
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username.'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email.'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
}

// Function call to initialize app
init();
