import { FastifyRequest, FastifyReply } from "fastify";
import z from "zod";
import { deleteNotificationsFactory } from "./factory/deleteNotificationFactory";

export async function deleteNotificationController(request: FastifyRequest, reply: FastifyReply) {

  const paramsSchema = z.object({
    userId: z.string().uuid(),
    id: z.string().uuid()
  })
  
  const { userId, id } = paramsSchema.parse(request.params)

  try {
    const notification = deleteNotificationsFactory()
    const delete_notification = await notification.execute(userId, id);

    reply.status(200).send(delete_notification);
    
  } catch (error) {
    reply.status(500).send({ error: "Erro ao tentar apagar a notificação" });
  }
}