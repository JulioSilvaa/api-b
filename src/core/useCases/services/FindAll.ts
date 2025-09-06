import type IService from "../../interfaces/ServicesInterface.js";
import type IServicesRepository from "../../repositories/ServicesReposity.js";

export default class FindAllSericesUseCase {
  private servicesRepository: IServicesRepository;

  constructor(servicesRepository: IServicesRepository) {
    this.servicesRepository = servicesRepository;
  }

  async execute(): Promise<IService[]> {
    return await this.servicesRepository.findAll();
  }
}