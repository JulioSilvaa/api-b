import type IServicesRepository from "../../repositories/ServicesReposity.js";

export default class DeleteServiceUseCase {
  private servicesRepository: IServicesRepository;

  constructor(servicesRepository: IServicesRepository) {
    this.servicesRepository = servicesRepository;
  }

  async execute(id: string): Promise<void> {
    await this.servicesRepository.delete(id);
  }
}
