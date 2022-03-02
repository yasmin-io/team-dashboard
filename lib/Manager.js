// Import the employee.js
const Employee = require("./Employee");

// Extend Manager from the Class 'Employee' from Employee.js
// This will follow on from Employee's current functions
class Manager extends Employee {
  constructor(name, id, email, officeNumber) {
    // The 'super' keyword is shorthand for the properties in Employee.js
    super(name, id, email);
    // This is unique to the Managers Class
    this.officeNumber = officeNumber;
  }

  // Return the role title 'Manager'
  getRole() {
    return "Manager";
  }
}

// Export this file to make it available to other files that require it
module.exports = Manager;
