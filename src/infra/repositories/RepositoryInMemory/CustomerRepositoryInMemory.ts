import type ICustomer from "../../../core/interfaces/CustomerInterface.js";
import type CustomerRepository from "../../../core/repositories/CustomerRepository.js";

export default class CustomerRepositoryInMemory implements CustomerRepository {
  userList: any[] = [
    {
      id: "1",
      name: "Julio",
      email: "julio@teste",
      phone: "234234234",
    },
    {
      id: "2",
      name: "Luan",
      email: "luan@teste.com",
      phone: "234234234",
    },
  ];

  save({ name, phone, email }: ICustomer): Promise<void> {
    const id = Math.random() + 1;
    this.userList.push({ id, name, email, phone });
    return Promise.resolve();
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  findByID(id: string): Promise<ICustomer> {
    throw new Error("Method not implemented.");
  }
  findByEmail(email: string): Promise<ICustomer> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<ICustomer[]> {
    throw new Error("Method not implemented.");
  }
}
