import { Employee } from "./entities/employee";
import debug from "debug";

const ORIGIN_MODULE = 'ts-day:Index';
const logger = debug(ORIGIN_MODULE);

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

const employeeInfo = newEmployee.showInfo();
logger('Employe Info %s', employeeInfo);
