import { beforeEach, describe, expect, test } from "vitest";
import CustomerRepositoryInMemory from "../../infra/repositories/RepositoryInMemory/CustomerRepositoryInMemory.ts";
import CreateCustomerUseCase from "../../core/useCases/customer/Create.ts";
import FindAllCustomerUseCase from "../../core/useCases/customer/FindAll.ts";
import FindByIdCustomerUseCase from "../../core/useCases/customer/FindById.ts";

describe("Teste unitário para Customer", () => {
  const user = {
    name: "julio",
    email: "julio@teste.com",
    phone: "3333333333",
  };

  let customerRepositoryMemory: CustomerRepositoryInMemory;

  beforeEach(() => {
    customerRepositoryMemory = new CustomerRepositoryInMemory();
  });

  test("Deveria criar um novo customer", async () => {
    const createCustomer = new CreateCustomerUseCase(customerRepositoryMemory);
    const newCustomer = await createCustomer.execute(user);

    expect(newCustomer).toBeDefined();
    expect(newCustomer.name).toBe(user.name);
    expect(newCustomer.email).toBe(user.email);
    expect(newCustomer.phone).toBe(user.phone);
    expect(newCustomer.id).toBe("ffff");
  });

  test("Deveria retornar uma lista de customers", async () => {
    const createCustomer = new CreateCustomerUseCase(customerRepositoryMemory);
    await createCustomer.execute(user);

    const findCustomers = new FindAllCustomerUseCase(customerRepositoryMemory);
    const customers = await findCustomers.execute();

    expect(customers.length).toBeGreaterThan(0);
    const customer = customers[0];
    expect(customer?.name).toBe(user.name);
    expect(customer?.email).toBe(user.email);
    expect(customer?.phone).toBe(user.phone);
  });

  test("Deveria retornar o customer com o ID fornecido", async () => {
    const createCustomer = new CreateCustomerUseCase(customerRepositoryMemory);
    const newCustomer = await createCustomer.execute(user);

    const findCustomerById = new FindByIdCustomerUseCase(
      customerRepositoryMemory
    );
    const customer = await findCustomerById.execute("ffff");

    expect(customer).toBeDefined();
    expect(customer?.id).toBe(newCustomer?.id);
    expect(customer?.name).toBe(newCustomer?.name);
  });
});
