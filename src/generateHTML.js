const Manager = require("../lib/Manager");
const Engineer = require("../lib/Engineer");
const Intern = require("../lib/Intern");

//Function that will render icons
function renderRoleIcon(role) {
  if (role === "Manager") {
    return `<i class="fas fa-mug-hot"></i>`;
  } else if (role === "Engineer") {
    return `<i class="fas fa-glasses"></i>`;
  } else {
    return `<i class="fas fa-user-graduate"></i>`;
  }
}

// Function that will render that the last properties in the employee class
function renderLastAttR(employee) {
  if (employee instanceof Manager) {
    return `<li>office Number: ${employee.officeNumber}</li>`;
  } else if (employee instanceof Engineer) {
    return `<li>GitHub: <a href="https://github.com/${employee.getGitHub()}" target="_blank">${employee.getGitHub()}</a></li>`;
  } else {
    return `<li>School: ${employee.getSchool()}</li>`;
  }
}

// function that renders the shared properties in all employees class
function renderEmployeeHTML(employee) {
  return `
    <section class="card" style="width: 18rem;">
          <div class="header text-light ps-3 pb-4 pt-3">
              <h3>${employee.getName()}</h3>
              <div>
                  <h5>
                  ${renderRoleIcon(employee.getRole())}
                  ${employee.getRole()}
                  </h5>
                  </div>
          </div>
          <div>
              <ul>
                  <li>ID: ${employee.getId()}</li>
                  <li>Email: <a href="mailto:${employee.getEmail()}">${employee.getEmail()}</a></li>
                  ${renderLastAttR(employee)}
              </ul>
          </div>
    </section>`;
}

// function that renders the entire html file
function generateHTML(myTeam) {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="./sample.css">
    </head>
    <body>
        <header class="jumbotron pt-4 pb-4 text-center bg-danger text-white">
            <h1 class="fw-bold fs-1">My Team</h1>
        </header>
    
        <main>
            ${myTeam.map(renderEmployeeHTML).join("")}
        </main>
    </body>
    </html>`;
}

module.exports = generateHTML;
