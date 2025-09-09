import type EmployeeEntity from "../../../core/entities/EmployeeEntity.ts";
import type { IEmployee } from "../../../core/interfaces/EmployeeInterface.js";
import type IEmployeeRepository from "../../../core/repositories/EmployeeRepository.js";

export default class EmployeeRepositoryMemory implements IEmployeeRepository {
  employees: EmployeeEntity[] = [];

  async save(data: EmployeeEntity): Promise<EmployeeEntity> {
    const id = "employ01";

    const newEmployee: EmployeeEntity = { id, ...data };
    this.employees.push(newEmployee);
    return newEmployee;
  }

  async delete(id: string): Promise<void> {
    this.employees = this.employees.filter((employee) => employee.id !== id);
  }

  async findById(id: string): Promise<IEmployee | null> {
    throw new Error("Method not implemented.");
  }

  async findByEmail(email: string): Promise<IEmployee | null> {
    throw new Error("Method not implemented.");
  }

  async findAll(): Promise<IEmployee[]> {
    throw new Error("Method not implemented.");
  }

  async update(
    id: string,
    { name, email, position, salary, phone }: IEmployee
  ): Promise<void> {
    const index = this.employees.findIndex((employee) => employee.id === id);
    if (index !== -1) {
      this.employees[index] = { id, name, email, position, salary, phone };
    }
  }
}
