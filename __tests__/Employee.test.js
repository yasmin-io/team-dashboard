const { expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("When I create a new Employee class - it sets name, email, id via constrcutor", () => {
  const employee = new Employee("Yasmin", 1, "yasmin@gmail.com");
  expect(employee.name).toBe("Yasmin");
});

test("When I create a new Employee class - it sets id via constrcutor", () => {
  const employee = new Employee("Yasmin", 1, "yasmin@gmail.com");

  expect(employee.id).toBe(1);
});

test("When I create a new Employee class - it sets name, email, id via constrcutor", () => {
  const employee = new Employee("Yasmin", 1, "yasmin@gmail.com");

  expect(employee.email).toBe("yasmin@gmail.com");
});
