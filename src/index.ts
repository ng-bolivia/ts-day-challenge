export interface Address {
  street: string;
  city: string;
  country: string;
  postalCode: number;
}


// TODO: La clase Person tiene los siguientes atributos: id, firstName, lastName y address. 👈
export class Person {
  constructor(
    protected id: number | string, // TODO: El id debería permitir almacenar tanto números como cadenas. 👈
    protected firstName: string,
    protected lastName: string,
    protected address: Address // TODO: El address debería ser de usar la interfaz Address 👈
  ) {}
}


// TODO: La clase Employee debería heredar de la clase Person. 👈
export class Employee extends Person{
  constructor(
    id: string, // TODO: El id debería permitir almacenar tanto números como cadenas. 👈
    firstName: string,
    lastName: string,
    address: Address, // TODO: El address debería ser de usar la interfaz Address 👈
    private department: string,
    private paymentPerHour: number,
    private workingHours: number,
    private hireDate?: Date // TODO: Se debería manejar la fecha como tipo Date y debería ser opcional 👈
  ) {
    super(id, firstName, lastName, address);
  }

  showInfo(): string {
    const fullName = this.displayFullName();
    const department = `Department: ${this.department}`;
    const address = this.formatAddress();
    const hireDate = `Hire Date: ${
      this.hireDate == null ? "-" : this.hireDate.toLocaleString()
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
