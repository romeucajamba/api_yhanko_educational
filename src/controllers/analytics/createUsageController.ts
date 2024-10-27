import { Server, Socket } from "socket.io";
import { CreateUsageEventUseCase } from "../../services/analytics/createUsageUseCase";

export class CreateUsageEventController {
  constructor(
    private createUsageEvent: CreateUsageEventUseCase,
    private io: Server
  ) {}

  async trackUserEvent(socket: Socket, data: { userId: string; action: string }) {

    const event = await this.createUsageEvent.execute(data);
    
    this.io.to(data.userId).emit("newUsageEvent", event);
  }
}