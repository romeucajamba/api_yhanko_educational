import { Server, Socket } from "socket.io";
import { Message } from "@prisma/client";
import { SendMessageUseCases } from "@/services/chat/sendMessageUseCase";

export class SendMessageController {
  constructor(private messageUseCases: SendMessageUseCases, private io: Server) {}
  async sendMessage(socket: Socket, data: Message) {

    const message = await this.messageUseCases.execute(data);
    
    this.io.to(data.receiverId).emit("newMessage", message);
  }
}