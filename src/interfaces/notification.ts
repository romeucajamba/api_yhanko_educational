import { Prisma, Notification, NotificationType } from "@prisma/client"

export interface CreateNotification {
    userId: string;
    message: string;
    type: "LIKE" | "COMMENT" | "MESSAGE" | "FOLLOW";
}

export interface NotificationRepository {
  create(
    userId: string,
    message: string,
    type: NotificationType,
  ): Promise <Notification>;
  getNotif(userId: string): Promise <Notification[]>;
  delet(userId: string, id: string): Promise <void>;
  readNotification(id: string): Promise<Notification>
}