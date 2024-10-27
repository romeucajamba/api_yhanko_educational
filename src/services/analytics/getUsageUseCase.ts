import { UsageEventRepository } from "../../interfaces/analitycs";
import { UsageEvent } from "@prisma/client";

export class GetUserEventsUseCase {
  constructor(private usageEventRepository: UsageEventRepository) {}

  async execute(userId: string): Promise<UsageEvent[]> {
    return await this.usageEventRepository.getUserEvents(userId);
  }
}