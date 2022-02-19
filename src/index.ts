export interface Address {
  street: string;
  city: string;
  country: string;
  postalCode: number;
}


export class Person {
  constructor(
    protected id: number | string,
    protected firstName: string,
    protected lastName: string,
    protected address: Address
  ) {}
}


export class Employee extends Person {
  constructor(
    id: string | number,
    firstName: string,
    lastName: string,
    address: Address,
    private department: string,
    private paymentPerHour: number,
    private workingHours: number,
    private hireDate?: Date 
  ) {
    super(id, firstName, lastName, address);
  }

  showInfo(): string {
    const fullName = this.displayFullName();
    const department = `Department: ${this.department}`;
    const address = this.formatAddress();
    const hireDate = `Hire Date: ${
      this.hireDate == null ? "-" : this.hireDate.toLocaleString() // Oye enserio no me corren porque es diferente el time zone o que hice mal?
    }`;
    const seniority = `Seniority: ${this.calculateSeniority()}`;
    const salary = `Salary: ${this.calculateSalary()}`;
    return `
      Employee ${this.id}:
      ${fullName}
      ${department}
      ${address}
      ${hireDate}
      ${seniority}
      ${salary}
    `;
  }

  formatAddress(): string {
    return `Address: ${this.address.street} ${
      this.address.postalCode == null ? "" : "#" + this.address.postalCode
    }, ${this.address.city} - ${this.address.country}`;
  }

  displayFullName(): string {
    return `Name: ${this.firstName} ${this.lastName}`;
  }

  calculateSalary(): number {
    return this.paymentPerHour * this.workingHours;
  }

  calculateSeniority(): number {
    if (this.hireDate) {
      return new Date().getFullYear() - this.hireDate.getFullYear();
    }
    return 0;
  }
}

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
newEmployee.showInfo();
