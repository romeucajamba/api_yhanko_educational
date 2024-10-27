import {  NotificationRepository } from "../../interfaces/notification";

  
export class ReadNotificastionUseCase{
  constructor(
    private notificationRepository: NotificationRepository,
  ){}

  async execute(
        id: string
    ) {

    const notifications = await this.notificationRepository.readNotification(
      id,
    );
  
    return notifications;
  }
} 