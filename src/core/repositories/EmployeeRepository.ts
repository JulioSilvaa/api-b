import type { IEmployee } from "../interfaces/EmployeeInterface.js";

export default interface IEmployeeRepository {  
  save({name, email, position, salary, phone}:IEmployee): Promise<void>;
  delete(id: string): Promise<void>;
  findById(id: string): Promise<IEmployee | null>;
  findByEmail(email: string): Promise<IEmployee | null>;
  findAll(): Promise<IEmployee[]>;
  update(id: string, {name, email, position, salary, phone}:IEmployee): Promise<void>;
}