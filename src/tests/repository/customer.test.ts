import { beforeEach, describe, expect, test } from "vitest";
import CustomerRepositoryInMemory from "../../infra/repositories/RepositoryInMemory/CustomerRepositoryInMemory.ts";
import CreateCustomerUseCase from "../../core/useCases/customer/Create.ts";
import FindAllCustomerUseCase from "../../core/useCases/customer/FindAll.ts";
import FindByIdCustomerUseCase from "../../core/useCases/customer/FindById.ts";
import FindCustomerByEmailUseCase from "../../core/useCases/customer/FindByEmail.ts";
import UpdateCustomerUseCase from "../../core/useCases/customer/Update.ts";
import DeleteCustomerUseCase from "../../core/useCases/customer/Delete.ts";

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

  test("Deveria lançar um erro quando buscar um customer com um ID inexistente", async () => {
    const findCustomerById = new FindByIdCustomerUseCase(
      customerRepositoryMemory
    );

    await expect(findCustomerById.execute("999")).rejects.toThrowError(
      "Customer with id 999 not found."
    );
  });

  test("Deveria lançar um erro com a mensagem correta quando email não encontrado", async () => {
    const findCustomerByEmail = new FindCustomerByEmailUseCase(
      customerRepositoryMemory
    );

    await expect(
      findCustomerByEmail.execute("notfound@example.com")
    ).rejects.toThrowError(
      "Customer with email notfound@example.com not found."
    );
  });

  test("Deveria retornar o cliente correto pelo email", async () => {
    const createCustomer = new CreateCustomerUseCase(customerRepositoryMemory);
    const newCustomer = await createCustomer.execute(user);

    const findCustomerByEmail = new FindCustomerByEmailUseCase(
      customerRepositoryMemory
    );
    const customer = await findCustomerByEmail.execute(user.email);

    expect(customer).toBeDefined();
    expect(customer?.email).toBe(user.email);
    expect(customer?.name).toBe(user.name);
  });

  test("Deveria apagar o cliente com o ID fornecido", async () => {
    const createCustomer = new CreateCustomerUseCase(customerRepositoryMemory);
    const newCustomer = await createCustomer.execute(user);

    console.log(newCustomer);
    const deleteCustomer = new DeleteCustomerUseCase(customerRepositoryMemory);
    const deletedCustomer = await deleteCustomer.execute(newCustomer.id);

    expect(deletedCustomer).toEqual(newCustomer);
  });

  test("Deveria lançar um erro quando tentar apagar um cliente que não existe", async () => {
    const deleteCustomer = new DeleteCustomerUseCase(customerRepositoryMemory);

    await expect(deleteCustomer.execute("999")).rejects.toThrowError(
      "Cliente não encontrado!"
    );
  });

  test("Deveria editar os dados de um cliente", async () => {
    const createCustomer = new CreateCustomerUseCase(customerRepositoryMemory);
    const newCustomer = await createCustomer.execute(user);

    const updatedData = {
      name: "Julio Silva",
      email: "julio.silva@teste.com",
      phone: "22222222",
    };

    const editeCustomer = new UpdateCustomerUseCase(customerRepositoryMemory);
    const updatedCustomer = await editeCustomer.execute(
      newCustomer.id,
      updatedData
    );

    expect(updatedCustomer?.id).toBe(newCustomer.id);
    expect(updatedCustomer?.name).toBe(updatedData.name);
    expect(updatedCustomer?.email).toBe(updatedData.email);
    expect(updatedCustomer?.phone).toBe(updatedCustomer.phone);
  });

  test("Deveria lançar erro quando tentar editar um cliente inexistente", async () => {
    const editeCustomer = new UpdateCustomerUseCase(customerRepositoryMemory);

    await expect(
      editeCustomer.execute("999", { name: "Novo Nome", email: "", phone: "" })
    ).rejects.toThrowError("Customer with id 999 not found.");
  });
});
