import { Address } from "../models/i-addres";
import { Person } from "./person";
import { id } from "../types/person-types";

export class Employee extends Person {

  constructor(
    id: id,
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
