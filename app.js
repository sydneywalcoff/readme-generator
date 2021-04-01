const inquirer = require('inquirer');

inquirer
    .prompt([
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
            type: 'list',
            name: 'licenses',
            message: 'What kind of license do you want to include?',
            choices: ['None', 'MIT', 'Apache License 2.0', 'GNU GPLv3', 'ISC']
        }
    ])
    .then(answers => console.log(answers))

