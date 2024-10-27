import { NotificationDatBase } from "../../../models/notification/notificationDataBase";
import { GetNotificastionUseCase } from "../../../services/notification/getNotificationsUseCase";
import { UserDatabase } from "../../../models/user/user-Database";


export function getNotificationsFactory(){
    const notificationRepository = new NotificationDatBase();
    const userRepository = new UserDatabase();
    const useCase = new GetNotificastionUseCase(notificationRepository, userRepository);
    return useCase
}