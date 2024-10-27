import { UserRepository } from "../../interfaces/user";
import {  NotificationRepository } from "../../interfaces/notification";
import { ResourceNotFound } from "@/error/error";

  
export class DeleteNotificastionUseCase{
  constructor(
    private notificationRepository: NotificationRepository,
    private userRepository: UserRepository
  ){}

  async execute(
        userId: string,
        id: string
    ) {
    const user = await this.userRepository.findById(userId);

    if(!user){
      throw new ResourceNotFound('Lamentamos, usuário não existe')
    }

    const notifications = await this.notificationRepository.delet(
      userId,
      id
    );
  
    return notifications;
  }
} 