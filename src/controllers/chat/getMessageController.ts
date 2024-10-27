import { Socket } from "socket.io";
import { GetMessagesUseCases } from "@/services/chat/getMessagesUseCase";

export class GetMessageController {
  constructor(private messageUseCases: GetMessagesUseCases) {}
  async getUserMessages(socket: Socket, userId: string) {

    const messages = await this.messageUseCases.execute(userId);
    
    socket.emit("userMessages", messages);
  }
}