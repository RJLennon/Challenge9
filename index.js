// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Enter project title',
        name: 'title',
      },
      {
        type: 'input',
        message: 'Enter a description',
        name: 'description',
      },
      {
        type: 'input',
        message: 'Enter installation instructions',
        name: 'installation',
      },
      {
        type: 'input',
        message: 'Enter usage information',
        name: 'usage',
      },
      {
        type: 'input',
        message: 'Enter contribution guidelines',
        name: 'contributing',
      },
      {
        type: 'input',
        message: 'Enter test instructions',
        name: 'tests',
      },
      {
        type: 'list',
        message: 'Pick one',
        name: 'license',
        choices: ["Choice 1","Choice 2","Choice 3"],
      },
      {
        type: 'input',
        message: 'Enter your GitHub user name',
        name: 'github',
      },
      {
        type: 'input',
        message: 'Enter your email address',
        name: 'email',
      },
];

//Need to add an object for the License Options based on the choice.
//Badge for each License and notice to the License section.
//Setup table of contents

const readmeContent = ({title,description,installation,usage,contributing,tests,license,github,email}) => {
  return `
    This is a test document.

    Title: ${title}
    Description: ${description}
    Email: ${email}
  `;
};

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    //Write data to the file
    fs.writeFile(fileName, data, (err) => {
      if (err) {
        console.error('An error occured',err);
        return;
      }
      console.log('file created!');
    });
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
      const readmeData = readmeContent(answers);
      writeToFile('NewReadME.md',readmeData);
    });
};

// Function call to initialize app
init();
