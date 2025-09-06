import type ICustomer from "../../interfaces/CustomerInterface.js";
import type CustomerRepository from "../../repositories/CustomerRepository.js";

export default class CreateCustomerUseCase {
  private customerRepository: CustomerRepository;

  constructor(customerRepository: CustomerRepository) {
    this.customerRepository = customerRepository;
  }

  async execute({ name, phone, email }: ICustomer):Promise<void> {
    if (!email) {
      throw new Error("Email é obrigatorio");
    }
    await this.customerRepository.save({ name, phone, email });
  }
}
