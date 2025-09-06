import type ICustomerRepository from "../../repositories/CustomerRepository.js";

export default class DeleteCustomerUseCase {
private customerRepository: ICustomerRepository;

  constructor(customerRepository: ICustomerRepository) {
    this.customerRepository = customerRepository;
  }

  async execute(id: string): Promise<void> {
    await this.customerRepository.delete(id);
  }
}