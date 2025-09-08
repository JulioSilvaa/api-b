import { beforeEach, describe, expect, test } from "vitest";
import CustomerRepositoryInMemory from "../../infra/repositories/RepositoryInMemory/CustomerRepositoryInMemory.js";
import CreateCustomerUseCase from "../../core/useCases/customer/Create.js";

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
});
