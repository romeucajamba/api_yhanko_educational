import { MessageDataBase } from "../../../models/chat/messageDataBase";
import { GetMessagesUseCases } from "../../../services/chat/getMessagesUseCase";

export function getMessageUseCases() {
  const messageRepository = new MessageDataBase();
  const useCase = new GetMessagesUseCases(messageRepository);
  return useCase;
}
