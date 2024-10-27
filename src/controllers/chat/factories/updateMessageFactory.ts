import { MessageDataBase } from "../../../models/chat/messageDataBase";
import { UpadateMessageUseCases } from "../../../services/chat/updateMessageUseCase";

export function updateMessageUseCases() {
  const messageRepository = new MessageDataBase();
  const useCase = new UpadateMessageUseCases(messageRepository);
  return useCase;
}