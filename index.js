//Import everything we need to create team member classes
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");

// Import the modules we need
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

//Import function to generate html
const renderTeamHtml = require("./src/teamHtmlGenerator");
// Empty array that the answers are being added to.
const teamMembers = [];

function init() {
  console.log("Starting application......");

  function createManager() {
    // Ask all the questions to get the manager details, create a manager using Manager class, add to team member array...
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is this teams Managers name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is this teams Managers id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is this teams Managers email?",
        },
        {
          type: "input",
          name: "officeNumber",
          message: "What is this teams Managers office number?",
        },
      ])
      .then((usersAnswers) => {
        const manager = new Manager(
          usersAnswers.name,
          usersAnswers.id,
          usersAnswers.email,
          usersAnswers.officeNumber
        );
        console.log(manager);
        teamMembers.push(manager);
        chooseNextStep();
      });
  }

  function createEngineer() {
    // TODO: Ask all the questions to get the Engineer details, create a engineer using Engineer class, add to team member array...

    // We invoke the inquirer prompt and create an object array of the corresponding questions to the employee
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is this Engineers name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is this Engineers id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is this Engineers email?",
        },
        {
          type: "input",
          name: "github",
          message: "What is this Engineers GitHub?",
        },
      ]) // Then, the users answers are passed in through the parameter...
      .then((usersAnswers) => {
        // And will become an object with the value of each answer given by the user.
        const engineer = new Engineer(
          usersAnswers.name,
          usersAnswers.id,
          usersAnswers.email,
          usersAnswers.github
        );
        console.log(engineer);
        // Then push this new object array into the 'teamMembers' array that we will access later
        teamMembers.push(engineer);
        // Run the next set of options for the user.
        chooseNextStep();
      });
  }

  function createIntern() {
    // TODO: Ask all the questions to get the intern details, create a intern using Intern class, add to team member array...
    console.log("creating intern....");
    // We invoke the inquirer prompt and create an object array of the corresponding questions to the employee
    // intern’s name, ID, email, and school,
    inquirer
      .prompt([
        {
          type: "input",
          name: "name",
          message: "What is this Interns name?",
        },
        {
          type: "input",
          name: "id",
          message: "What is this Interns id?",
        },
        {
          type: "input",
          name: "email",
          message: "What is this Interns email?",
        },
        {
          type: "input",
          name: "school",
          message: "What is this Engineers school name?",
        },
      ]) // Then, the users answers are passed in through the parameter...
      .then((usersAnswers) => {
        // And will become an object with the value of each answer given by the user.
        const intern = new Intern(
          usersAnswers.name,
          usersAnswers.id,
          usersAnswers.email,
          usersAnswers.school
        );
        console.log(intern);
        // Then push this new object array into the 'teamMembers' array that we will access later
        teamMembers.push(intern);
        // Run the next set of options for the user.
        chooseNextStep();
      });
  }

  function chooseNextStep() {
    //Ask the user if they want to add engineer, intern or finish adding team members
    inquirer
      .prompt([
        {
          type: "list",
          name: "choice",
          message: "What do you want to do next?",
          choices: [
            "Add an Engineer",
            "Add an Intern",
            "Finish adding members to the team",
          ],
        },
      ])
      .then((usersAnswer) => {
        if (usersAnswer.choice === "Add an Engineer") {
          createEngineer();
        } else if (usersAnswer.choice === "Add an Intern") {
          createIntern();
        } else {
          createTeamHtmlPage();
        }
      });
  }

  function createTeamHtmlPage() {
    // This is specifying where we are writing the html.
    // In the current directory -> inside the output folder
    const outputDirectory = path.resolve(__dirname, "output");
    const outputHtmlFilePath = path.join(outputDirectory, "team.html");
    // This will right the correct information to the html file
    console.log(renderTeamHtml, teamMembers);
    fs.writeFileSync(outputHtmlFilePath, renderTeamHtml(teamMembers));
  }

  createManager();
}

init();
