import type ICustomerRepository from "../../repositories/CustomerRepository.js";

export default class FindAllCustomerUseCase {
  private customerRepository: ICustomerRepository;

  constructor(customerRepository: ICustomerRepository) {
    this.customerRepository = customerRepository;
  }

  async execute(): Promise<void> {
    await this.customerRepository.findAll();
  }
}