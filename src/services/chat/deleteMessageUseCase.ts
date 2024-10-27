import { MessageRepository } from "../../interfaces/message";

export class DeleteMessageUseCases {
  constructor(private messageRepository: MessageRepository) {}

  async execute(id: string): Promise<void> {
    return this.messageRepository.delete(id);
  }
}