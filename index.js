const inquirer = require('inquirer');
const fs = require('fs');
const generateLogo = require('./lib/generateLogo.js');
const prompts = require('./lib/prompts.js');

function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateLogo(data), (err) => 
    err ? console.log(err) : console.log('Generated logo.svg')
  );
}

function init() {
  inquirer
  .prompt(prompts)
  .then((response) => {
    writeToFile("./examples/logo.svg", response);
  })
  .catch((err) => {
    if(err.isTtyError) {
      console.log("Prompt couldn't be rendered in the current environment");
    } else {
      console.log(err);
    }
  });
}

init();