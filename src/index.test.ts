import { Employee } from './index';

describe('Tests for Employee', () => {
  test('should create an new Employee', () => {
    const stringExpect = `
      Employee 100:
      Name: John Doe
      Department: Sales
      Address: Fake St #12345, NY - USA
      Hire Date: 1/31/2019, 8:00:00 PM
      Seniority: 3
      Salary: 8000
    `;
    const newEmployee = new Employee(
      "100",
      "John",
      "Doe",
      { street: "Fake St", city: "NY", country: "USA", postalCode: 12345 },
      "Sales",
      50,
      160,
      new Date("2019-02-01")
    );
    const info = newEmployee.showInfo();
    expect(info).toEqual(stringExpect);
  });
  test('should create an new Employee with hireDate optional', () => {
    const stringExpect = `
      Employee 100:
      Name: John Doe
      Department: Sales
      Address: Fake St #12345, NY - USA
      Hire Date: -
      Seniority: 0
      Salary: 8000
    `;
    const newEmployee = new Employee(
      "100",
      "John",
      "Doe",
      { street: "Fake St", city: "NY", country: "USA", postalCode: 12345 },
      "Sales",
      50,
      160,
    );
    const info = newEmployee.showInfo();
    expect(info).toEqual(stringExpect);
  });
  test('should create an new Employee with id as a number', () => {
    const stringExpect = `
      Employee 12:
      Name: John Doe
      Department: Sales
      Address: Fake St #12345, NY - USA
      Hire Date: -
      Seniority: 0
      Salary: 8000
    `;
    const newEmployee = new Employee(
      12,
      "John",
      "Doe",
      { street: "Fake St", city: "NY", country: "USA", postalCode: 12345 },
      "Sales",
      50,
      160,
    );
    const info = newEmployee.showInfo();
    expect(info).toEqual(stringExpect);
  });
});
