import { Server, Socket } from "socket.io";

import { DeleteMessageController } from "../controllers/chat/deleteMessageController";
import { GetMessageController } from "../controllers/chat/getMessageController";
import { SendMessageController } from "../controllers/chat/sendMessageController";
import { UpdateMessageController } from "../controllers/chat/updateMessageController";

import { deleteMessageUseCases } from "../controllers/chat/factories/deleteMessageFactory";
import { getMessageUseCases } from "../controllers/chat/factories/getMessagesFactory";
import { sendMessageUseCases } from "../controllers/chat/factories/sendMessageFactory";
import { updateMessageUseCases } from "../controllers/chat/factories/updateMessageFactory";



export async function chatRoutes(io: Server) {

  const sendMessageUseCase = sendMessageUseCases();
  const deleteMessageUseCase = deleteMessageUseCases();
  const getMessageUseCase = getMessageUseCases();
  const updateMessageUseCase = updateMessageUseCases();

  const sendMessageController = new SendMessageController(sendMessageUseCase, io);
  const getMessageController = new GetMessageController(getMessageUseCase, io);
  const deleteMessageController = new DeleteMessageController(deleteMessageUseCase, io)
  const updateController = new UpdateMessageController(updateMessageUseCase, io)

  io.on("connection", (socket: Socket) => {
    socket.on("sendMessage", (data) => sendMessageController.sendMessage(socket, data));
    socket.on("getUserMessages", (userId) => getMessageController.getUserMessages(socket, userId));
    socket.on("deleteMessage", (messageId) => deleteMessageController.deleteMessage(socket, messageId));
    socket.on("updateMessage", (messageId, data) => updateController.updateMessage(socket, messageId, data));
  });
}