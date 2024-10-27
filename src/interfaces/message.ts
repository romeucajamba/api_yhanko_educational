import { Message } from "@prisma/client";

export interface MessageRepository {
  create(data: Message): Promise<Message>;
  update(id: string, data: Partial<Message>): Promise<Message>;
  delete(id: string): Promise<void>;
  getAllByUserId(userId: string): Promise<Message[]>;
}
