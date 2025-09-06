import type IServicesRepository from "../../repositories/ServicesReposity.js";

export default class CreateServiceUseCase {
  private servicesRepository: IServicesRepository;

  constructor(servicesRepository: IServicesRepository) {
    this.servicesRepository = servicesRepository;
  }

  async execute(name: string, price: number): Promise<void> {
    await this.servicesRepository.save(name, price);
  }
}
