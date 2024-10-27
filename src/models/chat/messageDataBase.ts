import {  Message } from "@prisma/client";
import { prisma } from "../db/dbConnect";
import { MessageRepository } from "../../interfaces/message";

export class MessageDataBase implements MessageRepository {

  async create(data: Message): Promise<Message> {
    return await prisma.message.create({ data });
  }

  async update(id: string, data: Partial<Message>): Promise<Message> {
    return await prisma.message.update({
      where: { id },
      data,
    });
  }

  async delete(id: string): Promise<void> {
     await prisma.message.delete({ where: { id } });
  }

  async getAllByUserId(userId: string): Promise<Message[]> {
    return await prisma.message.findMany({
      where: { senderId: userId },
    });
  }
}