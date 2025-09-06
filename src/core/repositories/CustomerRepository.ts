import type ICustomer from "../interfaces/CustomerInterface.js";

export default interface ICustomerRepository {
  save({ name, phone, email }: ICustomer): Promise<void>;
  delete(id: string): Promise<void>;
  findByID(id: string): Promise<ICustomer>;
  findByEmail(email: string): Promise<ICustomer>;
  findAll(): Promise<ICustomer[]>;
}
