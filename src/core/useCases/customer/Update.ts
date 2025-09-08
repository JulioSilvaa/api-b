import type ICustomer from "../../interfaces/CustomerInterface.js";
import type CustomerRepository from "../../repositories/CustomerRepository.js";

export default class UpdateCustomerUseCase {
  private customerRepository: CustomerRepository;

  constructor(customerRepository: CustomerRepository) {
    this.customerRepository = customerRepository;
  }

  async execute(id: string, data: ICustomer): Promise<void> {
    await this.customerRepository.update(id, data);
  }
}
