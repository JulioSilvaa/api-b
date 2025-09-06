import type IEmployeeRepository from "../../repositories/EmployeeRepository.js";

export default class FindEmployeeByIdUseCase{
  private employeeRepository: IEmployeeRepository;

  constructor(employeeRepository: IEmployeeRepository){
    this.employeeRepository = employeeRepository;
  }

  async execute(id: string):Promise<any> {
    return await this.employeeRepository.findById(id);
  }
}
