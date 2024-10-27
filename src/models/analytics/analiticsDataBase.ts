import { UsageEvent } from "@prisma/client";
import { prisma } from "../db/dbConnect";
import { UsageEventRepository } from "../../interfaces/analitycs";

export class UsageEventDataBase implements UsageEventRepository {

  async createEvent(data: Omit<UsageEvent, "id">): Promise<UsageEvent> {
    return await prisma.usageEvent.create({ data });
  }

  async getUserEvents(userId: string): Promise<UsageEvent[]> {
    return await prisma.usageEvent.findMany({
      where: { userId },
      orderBy: { timestamp: "asc" },
    });
  }
}
