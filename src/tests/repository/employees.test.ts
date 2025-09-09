import CreateEmployeeUseCase from "../../core/useCases/employee/Create.ts";
import EmployeeRepositoryMemory from "../../infra/repositories/RepositoryInMemory/EmployeeRepositoryMemory.ts";

describe("Teste unitário para Employee", () => {
  const employee = {
    name: "julio",
    email: "julio@teste.com",
    position: "leader",
    salary: "20000",
    phone: "167872888",
  };

  let employeeRepositoryMemory: EmployeeRepositoryMemory;

  beforeEach(() => {
    employeeRepositoryMemory = new EmployeeRepositoryMemory();
  });

  test("Deveria criar um novo Funcionário", async () => {
    const createCustomer = new CreateEmployeeUseCase(employeeRepositoryMemory);
    const newEmployee = await createCustomer.execute(employee);

    expect(newEmployee).toBeDefined();
    expect(newEmployee.name).toBe(employee.name);
    expect(newEmployee.email).toBe(employee.email);
    expect(newEmployee.phone).toBe(employee.phone);
    expect(newEmployee.salary).toBe(employee.salary);
    expect(newEmployee.position).toBe(employee.position);
    expect(newEmployee.id).toBe("employ01");
  });
});
