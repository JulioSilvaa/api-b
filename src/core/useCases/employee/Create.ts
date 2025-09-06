import type IEmployeeRepository from "../../repositories/EmployeeRepository.js";

export default class EmplooyUseCase{
  private employeeRepository: IEmployeeRepository;

  constructor(employeeRepository: IEmployeeRepository){
    this.employeeRepository = employeeRepository;
  }

  async execute(name: string, email: string, position: string, salary: number, phone: string):Promise<void> {
    await this.employeeRepository.save({name, email, position, salary, phone});
  }
}