import {  CreateNotification } from "../../interfaces/notification";
import { Server } from "socket.io";
import { app } from "../../app";
import { UserRepository } from "../../interfaces/user";
import {  NotificationRepository } from "../../interfaces/notification";
import { ResourceNotFound } from "@/error/error";


  
export class CreateNotificastionUseCase{
  constructor(
    private notificationRepository: NotificationRepository,
    private userRepository: UserRepository
  ){}

  async execute({
    userId,
    message,
    type,
  }: CreateNotification) {
    const user = await this.userRepository.findById(userId);

    if(!user){
      throw new ResourceNotFound('Lamentamos, usuário não existe')
    }

    const notification = await this.notificationRepository.create(
      userId,
      message,
      type
    );
  
    const io = new Server(app.server);
    io.to(userId).emit("newNotification", notification);
  
    return notification;
  }
}
  