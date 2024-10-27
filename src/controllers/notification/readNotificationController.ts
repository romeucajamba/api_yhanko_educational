import { FastifyRequest, FastifyReply } from "fastify";
import z from "zod";
import { readNotificationsFactory } from "./factory/readNotificationFactory";

export async function readNotificationController(request: FastifyRequest, reply: FastifyReply) {

  const paramsSchema = z.object({
    id: z.string().uuid()
  })
  
  const { id } = paramsSchema.parse(request.params)

  try {
    const notification = readNotificationsFactory()
    const read_notification = await notification.execute(id);
    reply.status(200).send(read_notification);
  } catch (error) {
    reply.status(500).send({ error: "Erro ao marcar notificação como lida" });
  }
}