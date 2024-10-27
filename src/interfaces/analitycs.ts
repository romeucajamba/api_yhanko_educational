import { UsageEvent } from "@prisma/client";

export interface UsageEventRepository {
  createEvent(data: Omit<UsageEvent, "id">): Promise<UsageEvent>;
  getUserEvents(userId: string): Promise<UsageEvent[]>;
}


export interface CreateUsageEventDTO {
  userId: string;
  action: string;
  timestamp?: Date;
}