import type CustomerEntity from "../entities/customerEntity.ts";

export default interface ICustomerRepository {
  save({ name, phone, email }: CustomerEntity): Promise<CustomerEntity>;
  delete(id: string): Promise<CustomerEntity>;
  findByID(id: string): Promise<CustomerEntity>;
  findByEmail(email: string): Promise<CustomerEntity>;
  findAll(): Promise<CustomerEntity[]>;
  update(id: string, data: CustomerEntity): Promise<CustomerEntity>;
}
