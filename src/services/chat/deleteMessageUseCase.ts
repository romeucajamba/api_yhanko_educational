import { MessageRepository } from "../../interfaces/message";

export class DeleteMessageUseCases {
  constructor(private messageRepository: MessageRepository) {}

  async deleteMessage(id: string): Promise<void> {
    return this.messageRepository.delete(id);
  }
}