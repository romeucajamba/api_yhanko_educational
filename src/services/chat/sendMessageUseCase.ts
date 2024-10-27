import { MessageRepository } from "../../interfaces/message";
import { Message } from "@prisma/client";

export class SendMessageUseCases {
  constructor(private messageRepository: MessageRepository) {}

  async execute(data: Message): Promise<Message> {
    return this.messageRepository.create(data);
  }
}