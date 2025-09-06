import type IService from "../../../core/interfaces/ServicesInterface.js";
import type IServicesRepository from "../../../core/repositories/ServicesReposity.js";

export default class ServiceRepositoryInMemory implements IServicesRepository {
  findById(id: string): Promise<IService | null> {
    throw new Error("Method not implemented.");
  }
  findAll(): Promise<IService[]> {
    throw new Error("Method not implemented.");
  }
  save(name: string, price: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<void> {
    throw new Error("Method not implemented.");
  }
  update(id: string, name: string, price: number): Promise<void> {
    throw new Error("Method not implemented.");
  }
}