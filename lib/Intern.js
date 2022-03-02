// Import the employee.js
const Employee = require("./Employee");

// Extend Engineer from the Class 'Employee' from Employee.js
// This will follow on from Employee's current functions
class Intern extends Employee {
  // This constructor takes these arguments and sets the order of the object output
  constructor(name, id, email, school) {
    // The 'super' keyword is taking name, id, and email and implementing those properties here
    super(name, id, email);
    // This is unique to the Intern's Class
    this.school = school;
  }

  // Return the role title 'Intern' for this class

  getRole() {
    return "Intern";
  }

  // Return the employees school
  getSchool() {
    return this.school;
  }
}

// Export this files information to make it available to other files that require it
module.exports = Intern;
