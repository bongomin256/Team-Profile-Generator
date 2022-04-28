//Exporting every packages needed for this application.
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Creating an empty arry of my team
const myTeam = [];
