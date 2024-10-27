// src/controllers/MessageController.ts

import { Server, Socket } from "socket.io";
import { MessageUseCases } from "../useCases/MessageUseCases";
import { Message } from "@prisma/client";

export class MessageController {
  constructor(private messageUseCases: MessageUseCases, private io: Server) {}

  async sendMessage(socket: Socket, data: Message) {
    const message = await this.messageUseCases.createMessage(data);
    this.io.to(data.receiverId).emit("newMessage", message);
  }

  async getUserMessages(socket: Socket, userId: string) {
    const messages = await this.messageUseCases.getUserMessages(userId);
    socket.emit("userMessages", messages);
  }

  async deleteMessage(socket: Socket, messageId: string) {
    await this.messageUseCases.deleteMessage(messageId);
    socket.emit("messageDeleted", messageId);
  }
}