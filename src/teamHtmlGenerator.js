// Required information to create HTML page
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const Engineer = require("../lib/Engineer");

//Function to accept the array of team members, loop over them and generate html string then return 1 string
const generateTeamMembersString = (arrayOfTeamMembers) => {
  const finalString = "";
  console.log("Team members to generate....:", arrayOfTeamMembers);

  //TODO:
  // Loop over the array of team members??
  // If manager -> generate one type of string literal for that manager (so on for each employee)
  //Each member string literal -> concatenate with string on line 4. Do I do a ForEach? What kind of loop?
  //How Do I traverse and get information im looking for?

  if (Manager) {
    return `  <div class="card" style="width: 18rem">
        <div class="card-body">
          <div class="card-header text-light fw-bold bg-primary">
            <h5 class="card-title">{arrayOfTeamMembers.Manager.name}</h5>
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
              >{arrayOfTeamMembers.Manager.email}
            </a>
          </li>
          <li class="list-group-item fontsize">
            <span class="fw-bolder">Office Number:</span>
            {arrayOfTeamMembers.Manager.officeNumber}
          </li>
        </div>
      </div>
   `.concat(finalString);
  }

  // if (Engineer) {
  //   return "An Engineer was chosen".concat(finalString);
  // }

  // if (Intern) {
  //   return "An Intern was chosen".concat(finalString);
  // }

  return finalString;
};

// TODO:
// Find a way to insert text above into not re writing below.
// Add extra bootstrap and information and create more complicated strings
// Finish Other Tests
//

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
