import { Socket } from "socket.io";
import { DeleteMessageUseCases } from "@/services/chat/deleteMessageUseCase";

export class DeleteMessageController {
  constructor(private messageUseCases: DeleteMessageUseCases) {}
  async deleteMessage(socket: Socket, messageId: string) {

    await this.messageUseCases.execute(messageId);
    
    socket.emit("messageDeleted", messageId);
  }
}