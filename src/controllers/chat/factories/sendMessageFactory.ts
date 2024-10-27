import { MessageDataBase } from "../../../models/chat/messageDataBase";
import { SendMessageUseCases } from "../../../services/chat/sendMessageUseCase";

export function sendMessageUseCases() {
  const messageRepository = new MessageDataBase();
  const useCase = new SendMessageUseCases(messageRepository);
  return useCase;
}
