import { Address } from "../models/i-addres";
import { id } from "../types/person-types";

export class Person {

  protected id: id;
  protected firstName: string;
  protected lastName: string;
  protected address: Address;

  constructor(id: id, firstName: string, lastName: string, address: Address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}
