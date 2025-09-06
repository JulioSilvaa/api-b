import type IService from "../../interfaces/ServicesInterface.js";
import type IServicesRepository from "../../repositories/ServicesReposity.js";

export default class FindByIdServiceUseCase {
  private servicesRepository: IServicesRepository;

  constructor(servicesRepository: IServicesRepository) {
    this.servicesRepository = servicesRepository;
  }

  async execute(id: string): Promise<IService | null> {
    return await this.servicesRepository.findById(id);
  }
}