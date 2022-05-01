//Exporting every packages needed for this application.
const inquirer = require("inquirer");
const fs = require("fs");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

// Creating an empty arry of my team that will the employee catergories.
const myTeam = [];
console.log(myTeam);

// Creating array of questions to generate Manager employee
const managerQuiz = [
  {
    type: "input",
    message: "Enter your name",
    name: "managerName",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter the project's title to continue";
      }
    },
  },
  {
    type: "list",
    message: "What is your role?",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    message: "Enter your Manager's ID",
    name: "managerId",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter the project's title to continue";
      }
    },
  },
  {
    type: "input",
    message: "Enter your employee's email address",
    name: "managerEmail",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter the project's title to continue";
      }
    },
  },
  {
    type: "input",
    message: "Enter office number",
    name: "officeNumber",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter the project's title to continue";
      }
    },
  },
];

// Creating array of questions for menu option
const menuQuiz = [
  {
    type: "list",
    message: "Please select one of the option to continue",
    name: "menu",
    choices: [
      "Add Manager",
      "Add Engineer",
      "Add Intern",
      "Finish Buidling my team",
    ],
  },
];

// Creating array of questions to generate Engineer employee
const engineerQuiz = [
  {
    type: "input",
    message: "Enter your Engineer's name",
    name: "engineerName",
  },
  {
    type: "list",
    message: "What is your role?",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    message: "Enter your Engineer's ID number",
    name: "engineerId",
  },
  {
    type: "input",
    message: "Enter your Employee's email address",
    name: "engineerEmail",
  },
  {
    type: "input",
    message: "Enter your Engineer'S Github username",
    name: "githubUsername",
  },
];

// Creating array of questions to generate Intern employee
const internQuiz = [
  {
    type: "input",
    message: "Enter your name",
    name: "internName",
  },
  {
    type: "list",
    message: "What is your role?",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"],
  },
  {
    type: "input",
    message: "Enter your ID number",
    name: "internId",
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "internEmail",
  },
  {
    type: "input",
    message: "Enter your School",
    name: "school",
  },
];

//Manager prompt function.
function generateMananger() {
  inquirer.prompt(managerQuiz).then(function (response) {
    const manager = new Manager(
      response.managerName,
      response.managerId,
      response.managerEmail,
      response.officeNumber
    );
    myTeam.push(manager);
    console.log(myTeam);

    menuOption();
  });
}

//Menu option function
function menuOption() {
  inquirer.prompt(menuQuiz).then(function (response) {
    if (response.menu === "Add Engineer") {
      genEngineer();
    } else if (response.menu === "Add Intern") {
      genIntern();
    } else if (response.menu === "Add Manager") {
      generateMananger();
    } else {
      renderTeam();
    }
  });
}
//Engineer prompt function
function genEngineer() {
  inquirer.prompt(engineerQuiz).then((response) => {
    const engineer = new Engineer(
      response.engineerName,
      response.engineerId,
      response.engineerEmail,
      response.githubUsername
    );
    myTeam.push(engineer);
    console.log(myTeam);
    menuOption();
  });
}

// Intern prompt function
function genIntern() {
  return inquirer.prompt(internQuiz).then((response) => {
    const intern = new Intern(
      response.internName,
      response.internId,
      response.internEmail,
      response.school
    );
    myTeam.push(intern);
    console.log(myTeam);

    menuOption();
  });
}

// Creating the index.html file and storing it in the dist directory
function renderTeam() {
  fs.writeFile("./dist/index.html", generateHTML(myTeam), (err) => {
    err ? console.error(err) : console.log("you have built your team!");
  });
}

generateMananger();
