// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
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
function writeToFile(fileName, data) {
    // questions data goes in here and then we pass it to the readme-template.js
    fs.writeFile(fileName, data, err => {
        if(err) throw err;

        console.log('README complete!');
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(data => writeToFile('./dev/README.md', generateMarkdown(data)));
}

// Function call to initialize app
init();
