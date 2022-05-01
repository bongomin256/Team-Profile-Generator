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
    message: "Enter the employee's name",
    name: "managerName",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter a name to continue";
      }
    },
  },
  {
    type: "list",
    message: "Select the role",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please select one option to continue";
      }
    },
  },
  {
    type: "input",
    message: "Enter employee's ID number",
    name: "managerId",
    validate: (num) => {
      if (num) {
        return true;
      } else {
        return "Please enter the id number to continue";
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
        return "Please enter an email address to continue";
      }
    },
  },
  {
    type: "input",
    message: "Enter office number",
    name: "officeNumber",
    validate: (num) => {
      if (num) {
        return true;
      } else {
        return "Please enter the a number to continue";
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
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please select one option to continue";
      }
    },
  },
];

// Creating array of questions to generate Engineer employee
const engineerQuiz = [
  {
    type: "input",
    message: "Enter the Engineer's name",
    name: "engineerName",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter a name to continue";
      }
    },
  },
  {
    type: "list",
    message: "Select the role",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please select an option to continue";
      }
    },
  },
  {
    type: "input",
    message: "Enter your Engineer's ID number",
    name: "engineerId",
    validate: (num) => {
      if (num) {
        return true;
      } else {
        return "Please enter a number to continue";
      }
    },
  },
  {
    type: "input",
    message: "Enter your Employee's email address",
    name: "engineerEmail",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter an email address to continue";
      }
    },
  },
  {
    type: "input",
    message: "Enter your Engineer'S Github username",
    name: "githubUsername",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter Github username to continue";
      }
    },
  },
];

// Creating array of questions to generate Intern employee
const internQuiz = [
  {
    type: "input",
    message: "Enter Intern's name",
    name: "internName",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter a name to continue";
      }
    },
  },
  {
    type: "list",
    message: "Select the role",
    name: "role",
    choices: ["Manager", "Engineer", "Intern"],
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please select an option to continue";
      }
    },
  },
  {
    type: "input",
    message: "Enter employee's ID number",
    name: "internId",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter a number to continue";
      }
    },
  },
  {
    type: "input",
    message: "Enter your email address",
    name: "internEmail",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter an email address to continue";
      }
    },
  },
  {
    type: "input",
    message: "Enter the intern's School",
    name: "school",
    validate: (value) => {
      if (value) {
        return true;
      } else {
        return "Please enter the school name to continue";
      }
    },
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
    err
      ? console.error(err)
      : console.log("You have successfully built your team!");
  });
}

generateMananger();
