import type ICustomer from "../../interfaces/CustomerInterface.js";
import type CustomerRepository from "../../repositories/CustomerRepository.js";

export default class FindByIdCustomerUseCase {
  private customerUseCase: CustomerRepository;

  constructor(customerRepository: CustomerRepository) {
    this.customerUseCase = customerRepository;
  }

  async execute(id: string): Promise<ICustomer> {
    const customer = await this.customerUseCase.findByID(id);
    return customer;
  }
}
