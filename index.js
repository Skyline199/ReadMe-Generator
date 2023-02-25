const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./generateMarkdown");

// array of questions for user
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please name the title of your project?",
    },
   
    {
        type: "input",
        name: "Description",
        message: "Please describe your project?",
    },
  
    {
        type: "input",
        name: "Installation",
        message: "what type of installation will this be?",
    },
    {
        type: "input",
        name: "usage",
        message: "what will this be used for?",
    },
    {
        type: "input",
        name: "License",
        message: "What license are you using for this?",
    },
    {
        type: "input",
        name: "Contributing",
        message: "Who is contributing to this project?",
    },
    {
        type: "input",
        name: "Tests",
        message: "what tests will be done?",
    },
    {
        type: "input",
        name: "Questions",
        message: "What questions will this have?",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(__dirname,`./destination/${fileName}`),data)
}

// function to initialize program
function init() {
inquirer.prompt(questions).then((responses)=>{
    console.log(responses)
console.log("creating README.md file...");
writeToFile("README.md",generateMarkdown(responses));
})}

// function call to initialize program
init();
