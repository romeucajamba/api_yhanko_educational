import { NotificationDatBase } from "../../../models/notification/notificationDataBase";
import { ReadNotificastionUseCase } from "../../../services/notification/readNitificationUseCase";


export function readNotificationsFactory(){
    const notificationRepository = new NotificationDatBase();
    const useCase = new ReadNotificastionUseCase(notificationRepository);
    return useCase
}