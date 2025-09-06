import type { IEmployee } from "../../interfaces/EmployeeInterface.js";
import type IEmployeeRepository from "../../repositories/EmployeeRepository.js";

export default class FindAllEmployeeUseCase{
  private employeeRepository: IEmployeeRepository;

  constructor(employeeRepository: IEmployeeRepository){
    this.employeeRepository = employeeRepository;
  }

  async execute(): Promise<IEmployee[]> {
    return await this.employeeRepository.findAll();
  }
}