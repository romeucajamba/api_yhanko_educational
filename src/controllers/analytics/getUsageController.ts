import { Socket } from "socket.io";
import { GetUserEventsUseCase } from "../../services/analytics/getUsageUseCase";

export class GetUsageEventController {
  constructor(
    private getUserEvents: GetUserEventsUseCase,
  ) {}

  async fetchUserEvents(socket: Socket, userId: string) {

    const events = await this.getUserEvents.execute(userId);
    
    socket.emit("userUsageEvents", events);
  }
}