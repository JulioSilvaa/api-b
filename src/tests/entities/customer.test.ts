import CustomerEntity from "../../core/entities/customerEntity.ts";

describe("CustomerEntity", () => {
  it("deve criar um cliente com nome, email e telefone", () => {
    const data = {
      name: "João Silva",
      email: "joao@teste.com",
      phone: "99999-9999",
    };

    const customer = new CustomerEntity(data);

    expect(customer).toHaveProperty("id");
    expect(customer.name).toBe(data.name);
    expect(customer.email).toBe(data.email);
    expect(customer.phone).toBe(data.phone);
  });
});
