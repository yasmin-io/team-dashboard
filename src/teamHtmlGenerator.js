// Required information to create HTML page
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

//Function to accept the array of team members, loop over them and generate html string then return 1 string
const generateTeamMembersString = (arrayOfTeamMembers) => {
  const finalString = "";
  console.log("Team members to generate....:", arrayOfTeamMembers);

  // This dynamically implements the users answers into html strings.
  // Currently, I have struggled with referencing the information with template literals

  if (Manager) {
    return `  <div class="card" style="width: 18rem">
        <div class="card-body">
          <div class="card-header text-light fw-bold bg-primary">
            <h5 class="card-title">{name Template Literal}</h5>
            <h5 class="card-title">
              <span class="material-icons"> emoji_food_beverage </span> Manager
            </h5>
          </div>
          <li class="list-group-item fontsize">
            <span class="fw-bolder">ID:</span> {arrayOfTeamMembers.Manager.id}
          </li>
          <li class="list-group-item fontsize">
            <span class="fw-bolder">Email:</span>
            <a href="#" class="card-link"
              >{email Template Literal}
            </a>
          </li>
          <li class="list-group-item fontsize">
            <span class="fw-bolder">Office Number:</span>
            {officeNumber Template Literal}
          </li>
        </div>
      </div>
   `.concat(finalString);
  }

  return finalString;
};

// TODO:
// Finish Other Tests
// Loop over the array of team members and insert the corresponding strings into the exported string

//Function to export to index.js and also call function above to generate the html body
module.exports = (arrayOfTeamMembers) => {
  return `<!DOCTYPE html>
  <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title> Team Dashboard </title>
      <link rel="stylesheet" href="style.css" />
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet">
    </head>
    <body>
      <header>My Team</header>
      <main>
        ${generateTeamMembersString(arrayOfTeamMembers)}
      </main>
 
    
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
    </body>
  </html>`;
};
