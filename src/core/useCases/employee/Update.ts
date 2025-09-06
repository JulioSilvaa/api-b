import type { IEmployee } from "../../interfaces/EmployeeInterface.js";
import type IEmployeeRepository from "../../repositories/EmployeeRepository.js";

export default class UpdateEmployeeUseCase{
  private employeeRepository: IEmployeeRepository;

  constructor(employeeRepository: IEmployeeRepository){
    this.employeeRepository = employeeRepository;
  }

  async execute(id: string, data: IEmployee):Promise<void> {
    await this.employeeRepository.update(id, data);
  }
}