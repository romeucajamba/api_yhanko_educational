import { MessageDataBase } from "../../../models/chat/messageDataBase";
import { DeleteMessageUseCases } from "../../../services/chat/deleteMessageUseCase";

export function deleteMessageUseCases() {
  const messageRepository = new MessageDataBase();
  const useCase = new DeleteMessageUseCases(messageRepository);
  return useCase;
}
