import type ICustomer from "../../interfaces/CustomerInterface.js";
import type ICustomerRepository from "../../repositories/CustomerRepository.js";

export default class FindCustomerByEmailUseCase{
  private customerRepository: ICustomerRepository;

  constructor(customerRepository: ICustomerRepository){
    this.customerRepository = customerRepository;
  }

  async execute(email: string):Promise<ICustomer | null> {
    return await this.customerRepository.findByEmail(email);
  }
}
