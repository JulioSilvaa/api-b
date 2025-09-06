import type IServicesRepository from "../../repositories/ServicesReposity.js";

export default  class UpdateServiceUseCase {
  private servicesRepository: IServicesRepository;

  constructor(servicesRepository: IServicesRepository) {
    this.servicesRepository = servicesRepository;
  }

  async execute(id: string, name: string, price: number): Promise<void> {
    await this.servicesRepository.update(id, name, price);
  }
}
