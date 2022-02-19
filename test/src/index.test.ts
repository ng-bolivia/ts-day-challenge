import { Employee } from "../../src/entities/employee";

describe('Tests for Employee', () => {

  let stringExpect: string;
  let newEmployee: Employee;

  beforeAll(() => {
    stringExpect = `
      Employee 100:
      Name: John Doe
      Department: Sales
      Address: Fake St #12345, NY - USA
      Hire Date: 1/31/2019, 8:00:00 PM
      Seniority: 3
      Salary: 8000
    `;

    newEmployee = new Employee(
      "100",
      "John",
      "Doe",
      { street: "Fake St", city: "NY", country: "USA", postalCode: 12345 },
      "Sales",
      50,
      160,
      new Date("2019-01-31 8:00:00 PM")
    );
  })

  test('should create an new Employee', () => {
    const info = newEmployee.showInfo();
    expect(info).toEqual(stringExpect);
  });

  test('should create an new Employee with hireDate optional', () => {
    const info = newEmployee.showInfo();
    expect(info).toEqual(stringExpect);
  });

  test('should create an new Employee with id as a number', () => {
    const info = newEmployee.showInfo();
    expect(info).toEqual(stringExpect);
  });

});
