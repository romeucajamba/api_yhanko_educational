import { NotificationDatBase } from "../../../models/notification/notificationDataBase";
import { CreateNotificastionUseCase } from "../../../services/notification/notificationUseCase";
import { UserDatabase } from "../../../models/user/user-Database";


export function createNotificationFactory(){
    const notificationRepository = new NotificationDatBase();
    const userRepository = new UserDatabase();
    const useCase = new CreateNotificastionUseCase(notificationRepository, userRepository);

    return useCase;
}