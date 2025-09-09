import EmployeeEntity from "../../core/entities/EmployeeEntity.ts";

describe("EmployeeEntity", () => {
  it("deve criar um funcionário com os dados necessários", () => {
    const data = {
      name: "João Silva",
      email: "joao@teste.com",
      phone: "99999-9999",
      position: "leader",
      salary: "2000",
    };

    const customer = new EmployeeEntity(data);

    expect(customer).toHaveProperty("id");
    expect(customer.name).toBe(data.name);
    expect(customer.email).toBe(data.email);
    expect(customer.phone).toBe(data.phone);
    expect(customer.salary).toBe(data.salary);
    expect(customer.position).toBe(data.position);
  });
});
