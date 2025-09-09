import ServiceEntity from "../../core/entities/ServiceEntity.ts";
describe("ServiceEntity", () => {
  it("deve criar um serviços com os dados necessários", () => {
    const data = {
      name: "João Silva",
      description: "joao@teste.com",
      price: "99999-9999",
      duration: 50,
    };

    const customer = new ServiceEntity(data);

    expect(customer).toHaveProperty("id");
    expect(customer.name).toBe(data.name);
    expect(customer.description).toBe(data.description);
    expect(customer.price).toBe(data.price);
    expect(customer.price).toBe(data.price);
  });
});
