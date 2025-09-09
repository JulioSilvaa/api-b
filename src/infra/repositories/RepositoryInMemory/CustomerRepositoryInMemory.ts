import type CustomerEntity from "../../../core/entities/customerEntity.ts";
import type CustomerRepository from "../../../core/repositories/CustomerRepository.ts";

export default class CustomerRepositoryInMemory implements CustomerRepository {
  customerList: CustomerEntity[] = [];

  async save({ name, phone, email }: CustomerEntity): Promise<any> {
    try {
      const id = "ffff";

      const newCustomer: CustomerEntity = { id, name, phone, email };

      this.customerList.push(newCustomer);
      return newCustomer;
    } catch (error) {}
  }

  async delete(id: string): Promise<CustomerEntity | any> {
    const index = this.customerList.findIndex((customer) => customer.id === id);

    if (index === -1) {
      throw new Error("Cliente não encontrado!");
    }

    const deleted = this.customerList.splice(index, 1)[0];
    return deleted;
  }

  async findByID(id: string): Promise<CustomerEntity> {
    const customerFound = this.customerList?.find(
      (customer) => id === customer.id
    );
    if (!customerFound) {
      throw new Error(`Customer with id ${id} not found.`);
    }
    return customerFound;
  }
  async findByEmail(email: string): Promise<CustomerEntity> {
    const customerFound = this.customerList.find(
      (customer) => customer.email === email
    );

    if (!customerFound) {
      throw new Error("Customer with email notfound@example.com not found.");
    }
    return customerFound;
  }
  async findAll(): Promise<any> {
    try {
      return this.customerList;
    } catch (error) {}
  }
  async update(id: string, data: CustomerEntity): Promise<CustomerEntity> {
    let found = false;

    this.customerList = this.customerList.map((customer) => {
      if (customer.id === id) {
        found = true;
        return { ...customer, ...data };
      }
      return customer;
    });

    if (!found) {
      throw new Error(`Customer with id ${id} not found.`);
    }

    // Retorna o customer atualizado
    const updatedCustomer = this.customerList.find(
      (customer) => customer.id === id
    )!;
    return updatedCustomer;
  }
}
