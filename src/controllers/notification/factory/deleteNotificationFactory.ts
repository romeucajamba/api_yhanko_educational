import { NotificationDatBase } from "../../../models/notification/notificationDataBase";
import { DeleteNotificastionUseCase } from "../../../services/notification/deleteNotificationUseCase";
import { UserDatabase } from "../../../models/user/user-Database";


export function deleteNotificationsFactory(){
    const notificationRepository = new NotificationDatBase();
    const userRepository = new UserDatabase();
    const useCase = new DeleteNotificastionUseCase(notificationRepository, userRepository);
    return useCase
}