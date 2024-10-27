import { MessageRepository } from "../../interfaces/message";
import { Message } from "@prisma/client";

export class UpadateMessageUseCases {
  constructor(private messageRepository: MessageRepository) {}

  async execute(id: string, data: Partial<Message>): Promise<Message> {
    return this.messageRepository.update(id, data);
  }
}