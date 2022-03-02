// Import the employee.js
const Employee = require("./Employee");

// Extend Engineer from the Class 'Employee' from Employee.js
// This will follow on from Employee's current functions
class Engineer extends Employee {
  // This constructor takes these arguments and sets the order of the object output
  constructor(name, id, email, github) {
    // The 'super' keyword is taking name, id, and email and implementing those properties here
    super(name, id, email);
    // This is unique to the Engineers Class
    this.github = github;
  }

  // Return the role title 'Engineer' for this class
  getRole() {
    return "Engineer";
  }

  // Return the employees github
  getGithub() {
    return this.github;
  }
}

// Export this files information to make it available for the files that require it
module.exports = Engineer;
