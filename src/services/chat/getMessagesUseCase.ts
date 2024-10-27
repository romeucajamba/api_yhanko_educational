import { MessageRepository } from "../../interfaces/message";
import { Message } from "@prisma/client";

export class GetMessagesUseCases {
  constructor(private messageRepository: MessageRepository) {}
  async execute(userId: string): Promise<Message[]> {
    return this.messageRepository.getAllByUserId(userId);
  }
}