// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer
  .prompt([
    {
      type: 'input',
      message: 'Question 1?',
      name: 'Question 1',
    },
    {
      type: 'input',
      message: 'Question 2?',
      name: 'Question 2',
    },
    {
      type: 'input',
      message: 'Question 3?',
      name: 'Question 3',
    },
    {
      type: 'input',
      message: 'Question 4?',
      name: 'Question 4',
    },
    {
      type: 'input',
      message: 'Question 5?',
      name: 'Question 5',
    },
  ]);

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
