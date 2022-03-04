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
    console.log("creating engineer....");

    chooseNextStep();
  }

  function createIntern() {
    // TODO: Ask all the questions to get the intern details, create a intern using Intern class, add to team member array...
    console.log("creating intern....");

    chooseNextStep();
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
            "Add an intern",
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
    // Specify where we are going to create out html page. In the current directory -> inside the output folder
    const outputDirectory = path.resolve(__dirname, "output");
    const outputHtmlFilePath = path.join(outputDirectory, "team.html");
    // Create our html page
    console.log(renderTeamHtml, teamMembers);
    fs.writeFileSync(outputHtmlFilePath, renderTeamHtml(teamMembers));
  }

  createManager();
}

init();
