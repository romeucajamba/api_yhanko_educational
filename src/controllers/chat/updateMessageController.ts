import { Server, Socket } from "socket.io";
import { UpadateMessageUseCases } from "../../services/chat/updateMessageUseCase";
import { Message } from "@prisma/client";

export class UpdateMessageController {
  constructor(private messageUseCases: UpadateMessageUseCases) {}

  async updateMessage(socket: Socket, messageId: string, newContent: Partial<Message>) {

    const updatedMessage = await this.messageUseCases.execute(messageId, newContent);

    socket.emit("messageUpdated", updatedMessage);
  }
}
