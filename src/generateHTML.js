// function that renders manager
function renderManagerHTMl(response) {
  retrun`
    <section class="card" style="width: 18rem;">
    <div class="header text-light ps-3 pb-4 pt-3">
        <h3>${response.managerName}</h3>
        <div>
           <h5>
            <i class="fas fa-mug-hot"></i>
            ${response.role}
           </h5>
        </div>
    </div>
    <div>
        <ul>
            <li>ID: ${response.managerId}</li>
            <li>Email: <a href="mailto:${response.managerEmail}">${response.managerEmail}</a></li>
            <li>office Number: ${response.officeNumber}</li>
        </ul>
    </div>
  </section>`;
}

// function that renders Engineer
function renderEngineerHTMl() {
  retrun`
    <section class="card" style="width: 18rem;">
    <div class="header text-light ps-3 pb-4 pt-3">
        <h3>${response.engineerName}</h3>
        <div>
           <h5>
            <i class="fa-solid fa-glasses"></i>
            ${response.role}
           </h5>
        </div>
    </div>
    <div>
        <ul>
            <li>ID: ${response.engineerId}</li>
            <li>Email: <a href="mailto:${response.engineerEmail}">${response.engineerEmail}</a></li>
            <li>GitHub: <a href="https://github.com/${response.githubUsername}" target="_blank">${response.githubUsername}</a></li>
        </ul>
    </div>
    </section>`;
}

// function that renders interns employee
function renderInternHTMl() {
  retrun`
    <section class="card" style="width: 18rem;">
          <div class="header text-light ps-3 pb-4 pt-3">
              <h3>${response.internName}</h3>
              <div>
                  <h5>
                  <i class="fas fa-user-graduate"></i>
                  ${response.role}
                  </h5>
                  </div>
          </div>
          <div>
              <ul>
                  <li>ID: ${response.internId}</li>
                  <li>Email: <a href="mailto:${response.internEmail}">${response.internEmail}</a></li>
                  <li>School: ${response.school}</li>
              </ul>
          </div>
      </section>`;
}

// function that renders the entire html file
function generateHTML() {
  return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css" integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g==" crossorigin="anonymous" referrerpolicy="no-referrer" />
        <link rel="stylesheet" href="/src/sample.css">
    </head>
    <body>
        <header class="jumbotron pt-4 pb-4 text-center bg-danger text-white">
            <h1 class="fw-bold fs-1">My Team</h1>
        </header>
    
        <main>
            
        </main>
    </body>
    </html>`;
}

module.exports = generateHTML;
