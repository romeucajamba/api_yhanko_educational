import { Connection } from "@prisma/client";

export interface ConnectionRepository {
  sendConnectionRequest(requesterId: string, receiverId: string): Promise<Connection>;
  acceptConnectionRequest(connectionId: string): Promise<Connection>;
  rejectConnectionRequest(connectionId: string): Promise<Connection>;
  removeConnection(connectionId: string): Promise<void>;
  getConnections(userId: string): Promise<Connection[]>;
}
