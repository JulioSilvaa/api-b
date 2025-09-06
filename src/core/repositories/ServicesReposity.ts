import type IService from "../interfaces/ServicesInterface.js";

export default interface IServicesRepository {
  findById(id: string): Promise<IService | null>;
  findAll(): Promise<IService[]>;
  save(name: string, price: number): Promise<void>;
  delete(id: string): Promise<void>;          
  update(id: string, name: string, price: number): Promise<void>;
}