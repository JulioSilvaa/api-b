import type { IEmployee } from "../../../core/interfaces/EmployeeInterface.js";
import type IEmployeeRepository from "../../../core/repositories/EmployeeRepository.js";

export default class EmployeeRepositoryMemory implements IEmployeeRepository {
  save({ name, email, position, salary, phone }: IEmployee): Promise<void> {
    throw new Error("Method not implemented.");
  }
  private employees: IEmployee[] = [];

  async add({name, email, position, salary, phone}: IEmployee): Promise<void> {
    this.employees.push({name, email, position, salary, phone});
  }

  async delete(id: string): Promise<void> {
    this.employees = this.employees.filter(employee => employee.id !== id);
  }

  async findById(id: string): Promise<IEmployee | null> {
    return this.employees.find(employee => employee.id === id) || null;
  }

  async findByEmail(email: string): Promise<IEmployee | null> {
    return this.employees.find(employee => employee.email === email) || null;
  }

  async findAll(): Promise<IEmployee[]> {
    return this.employees;
  }

  async update(id: string, {name, email, position, salary, phone}: IEmployee): Promise<void> {
    const index = this.employees.findIndex(employee => employee.id === id);
    if (index !== -1) {
      this.employees[index] = {id, name, email, position, salary, phone};
    }
  }
}