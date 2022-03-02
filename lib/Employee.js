class Employee {
  // This constructor takes these arguments and sets the order of the object output
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  // These functions are what display certain information for the user
  getName() {
    return this.name;
  }

  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "Employee";
  }
}

// Export this files information to make it available to the other files that require it.
module.exports = Employee;
