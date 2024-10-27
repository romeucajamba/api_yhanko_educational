import { Notification, NotificationType } from "@prisma/client";
import { NotificationRepository } from "../../interfaces/notification";
import { prisma } from "../db/dbConnect";


export class NotificationDatBase implements NotificationRepository {
    async create(
        userId: string,
        message: string,
        type: NotificationType,
      ) {

        const notification = await prisma.notification.create({
          data: {
            userId,
            message,
            type,
            isRead: false,
          },
        });
      
      
        return notification;
    }

    async getNotif(userId: string): Promise<Notification[]> {
        const notifications = await prisma.notification.findMany({
            where:{
                userId
            }
        });

        return notifications
    }

    async delet(userId: string, id: string): Promise<void> {
         await prisma.notification.delete({
            where:{
                userId,
                id
            }
        });
    
    }

    async readNotification(id: string): Promise<Notification> {
        return await prisma.notification.update({
            where: { id },
            data: { isRead: true },
        });
    }
}