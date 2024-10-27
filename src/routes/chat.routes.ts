import { Server, Socket } from "socket.io";
import { createMessageUseCases } from "../factories/MessageFactory";
import { MessageController } from "../controllers/MessageController";

export async function chatRoutes(io: Server) {
  const messageUseCases = createMessageUseCases();
  const messageController = new MessageController(messageUseCases, io);

  io.on("connection", (socket: Socket) => {
    socket.on("sendMessage", (data) => messageController.sendMessage(socket, data));
    socket.on("getUserMessages", (userId) => messageController.getUserMessages(socket, userId));
    socket.on("deleteMessage", (messageId) => messageController.deleteMessage(socket, messageId));
  });
}