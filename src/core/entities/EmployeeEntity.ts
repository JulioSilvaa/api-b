import type { IEmployee } from "../interfaces/EmployeeInterface.js";

export default class EmployeeEntity {
  id?: string | undefined;
  name: string;
  email: string;
  position: string;
  salary: number;
  phone: string;    

  constructor(props: IEmployee) {
    this.id = props.id;
    this.name = props.name;
    this.email = props.email;
    this.position = props.position;
    this.salary = props.salary;
    this.phone = props.phone;    
  }
}