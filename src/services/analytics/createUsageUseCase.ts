import { UsageEventRepository, CreateUsageEventDTO } from "../../interfaces/analitycs";

export class CreateUsageEventUseCase {
  constructor(private usageEventRepository: UsageEventRepository) {}

  async execute(data: CreateUsageEventDTO) {
    return await this.usageEventRepository.createEvent({
      ...data,
      timestamp: data.timestamp || new Date(),
    });
  }
}
