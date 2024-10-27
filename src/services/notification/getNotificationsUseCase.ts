import { UserRepository } from "../../interfaces/user";
import {  NotificationRepository } from "../../interfaces/notification";
import { ResourceNotFound } from "@/error/error";


  
export class GetNotificastionUseCase{
  constructor(
    private notificationRepository: NotificationRepository,
    private userRepository: UserRepository
  ){}

  async execute(
        userId: string
    ) {
    const user = await this.userRepository.findById(userId);

    if(!user){
      throw new ResourceNotFound('Lamentamos, usuário não existe')
    }

    const notifications = await this.notificationRepository.getNotif(
      userId,
    );
  
    return notifications;
  }
} 