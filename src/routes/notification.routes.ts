import { FastifyInstance } from "fastify";
import { createNotificationController } from "../controllers/notification/createNotificationController";
import { readNotificationController } from "../controllers/notification/readNotificationController";

export async function notificationRoutes(app: FastifyInstance){
      
  app.post("/notifications", createNotificationController);
    
  app.patch("/notifications/:id/read",  readNotificationController);

  app.get('notifications/:userId/all')
}

/*
import io from "socket.io-client";

const socket = io("http://localhost:3000");

// Escuta por novas notificações
socket.on("newNotification", (notification) => {
  console.log("Nova notificação recebida:", notification);
  // Atualize a UI para exibir a notificação
});
*/