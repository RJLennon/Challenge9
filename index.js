// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Question 1?',
        name: 'Question1',
      },
      {
        type: 'input',
        message: 'Question 2?',
        name: 'Question2',
      },
      {
        type: 'input',
        message: 'Question 3?',
        name: 'Question3',
      },
      {
        type: 'input',
        message: 'Question 4?',
        name: 'Question4',
      },
      {
        type: 'input',
        message: 'Question 5?',
        name: 'Question5',
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //Write data to the file
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions);
};

// Function call to initialize app
init();
