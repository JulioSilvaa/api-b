import type IEmployeeRepository from "../../repositories/EmployeeRepository.js";

export default class DeleteEmployeeUseCase{
  private employeeRepository: IEmployeeRepository;

  constructor(employeeRepository: IEmployeeRepository){
    this.employeeRepository = employeeRepository;
  }

  async execute(id: string):Promise<void> {
    await this.employeeRepository.delete(id);
  }
}