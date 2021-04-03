// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: 'Please describe your project. (Required)',
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log('Please enter a description for your project!');
            }
        }
    },
    {
        type: 'input',
        name: 'installation',
        message: 'Please enter installation instructions. (Required)',
        validate: installationInput => {
            if(installationInput) {
                return true;
            } else {
                console.log('Please enter installation instructions for your project!');
            }
        }
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please enter usage instructions. (Required)',
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log('Please enter usage instructions for your project!');
            }
        }
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Please enter contribution guidelines. (Required)',
        validate: contributionInput => {
            if(contributionInput) {
                return true;
            } else {
                console.log('Please enter contribution instructions for your project!');
            }
        }
    },
    {
        type: 'input',
        name: 'test',
        message: 'Please enter test instructions. (Required)',
        validate: testInput => {
            if(testInput) {
                return true;
            } else {
                console.log('Please enter test instructions for your project!');
            }
        }
    },
    {
        type: 'list',
        name: 'license',
        message: 'What kind of license do you want to include? (Required)',
        choices: ['None', 'MIT', 'Apache License 2.0', 'GNU GPLv3', 'ISC'],
        validate: licenseInput => {
            if(licenseInput) {
                return true;
            } else {
                console.log('Please enter the license you want to use with your project!');
            }
        }
    },
    {
        type: 'input',
        name: 'github',
        message: 'Please enter your github username. (Required)',
        validate: githubInput => {
            if(githubInput) {
                return true;
            } else {
                console.log('Please enter your github username!');
            }
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Please enter your email. (Required)',
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log('Please enter your github email!');
            }
        }
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
    inquirer
        .prompt(questions)
        .then(data => writeToFile('./dev/README.md', generateMarkdown(data)));
}

// Function call to initialize app
init();
