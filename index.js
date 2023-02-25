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
        name: "title",
        message: "Please name the sections?",
    },
    {
        type: "input",
        name: "title",
        message: "Please describe your project?",
    },
    {
        type: "input",
        name: "title",
        message: "Please input your table of contents?",
    },
    {
        type: "input",
        name: "title",
        message: "what type of installation will this be?",
    },
    {
        type: "input",
        name: "title",
        message: "what will this be used for?",
    },
    {
        type: "input",
        name: "title",
        message: "What license are you using for this?",
    },
    {
        type: "input",
        name: "title",
        message: "Who is contributing to this project?",
    },
    {
        type: "input",
        name: "title",
        message: "what tests will be done?",
    },
    {
        type: "input",
        name: "title",
        message: "What questions will this have?",
    },

];

// function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(preocess.cwd(),fileName),data)
}

// function to initialize program
function init() {
inquirer.createPromptModule(questions).then((responses)) -> {
console.log("creating README.md file...");
writeToFile("./README.md");
}}

// function call to initialize program
init();
