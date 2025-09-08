import type CustomerEntity from "../../../core/entities/customerEntity.js";
import type ICustomer from "../../../core/interfaces/CustomerInterface.js";
import type CustomerRepository from "../../../core/repositories/CustomerRepository.ts";

export default class CustomerRepositoryInMemory implements CustomerRepository {
  customerList: CustomerEntity[] = [];

  async save({ name, phone, email }: ICustomer): Promise<any> {
    try {
      const id = "ffff";

      const newCustomer: ICustomer = { id, name, phone, email };

      this.customerList.push(newCustomer);
      return newCustomer;
    } catch (error) {}
  }

  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  async findByID(id: string): Promise<any> {
    try {
      const customerFound = this.customerList?.find(
        (customer) => id === customer.id
      );
      if (customerFound) {
        return customerFound;
      }
    } catch (error) {}
  }
  findByEmail(email: string): Promise<ICustomer> {
    throw new Error("Method not implemented.");
  }
  async findAll(): Promise<any> {
    try {
      return this.customerList;
    } catch (error) {}
  }
  update(id: string, data: ICustomer): Promise<void> {
    throw new Error("Method not implemented");
  }
}
