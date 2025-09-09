import type EmployeeEntity from "../../entities/EmployeeEntity.ts";
import type IEmployeeRepository from "../../repositories/EmployeeRepository.js";

export default class CreateEmployeeUseCase {
  private employeeRepository: IEmployeeRepository;

  constructor(employeeRepository: IEmployeeRepository) {
    this.employeeRepository = employeeRepository;
  }

  async execute(data: EmployeeEntity): Promise<EmployeeEntity> {
    const employeeCreated = await this.employeeRepository.save(data);
    return employeeCreated;
  }
}
