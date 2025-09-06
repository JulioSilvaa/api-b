import type { IEmployee } from "../../interfaces/EmployeeInterface.js";
import type IEmployeeRepository from "../../repositories/EmployeeRepository.js";

export default class FindEmployeeByEmail{
  private employeeRepository: IEmployeeRepository;

  constructor(employeeRepository: IEmployeeRepository){
    this.employeeRepository = employeeRepository;
  }

  async execute(email: string):Promise<IEmployee | null> {
    return await this.employeeRepository.findByEmail(email);
  }
}