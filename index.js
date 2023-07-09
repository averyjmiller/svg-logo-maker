const inquirer = require('inquirer');
const fs = require('fs');
const generateSVG = require('./lib/generateSVG.js');
const prompts = require('./lib/prompts.js');

function writeToFile(fileName, data) {
  // fs.writeFile(fileName, generateSVG(data), (err) => 
  //   err ? console.log(err) : console.log('Generated logo.svg')
  // );
  console.log(fileName);
  console.log(data);
}

function init() {
  inquirer
  .prompt(prompts)
  .then((response) => {
    writeToFile("logo.svg", response);
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