import { prisma } from "../db/dbConnect";
import { Connection } from "@prisma/client";
import { ConnectionRepository } from "../../interfaces/connection";

export class ConnectionDataBase implements ConnectionRepository {

  async sendConnectionRequest(requesterId: string, receiverId: string): Promise<Connection> {
    return await prisma.connection.create({
      data: {
        requesterId,
        receiverId,
        status: "pending",
      },
    });
  }

  async acceptConnectionRequest(connectionId: string): Promise<Connection> {
    return await prisma.connection.update({
      where: { id: connectionId },
      data: { status: "accepted" },
    });
  }

  async rejectConnectionRequest(connectionId: string): Promise<Connection> {
    return await prisma.connection.update({
      where: { id: connectionId },
      data: { status: "rejected" },
    });
  }

  async removeConnection(connectionId: string): Promise<void> {
    await prisma.connection.delete({
      where: { id: connectionId },
    });
  }

  async getConnections(userId: string): Promise<Connection[]> {
    return await prisma.connection.findMany({
      where: {
        OR: [{ requesterId: userId }, { receiverId: userId }],
        status: "accepted",
      },
    });
  }
}