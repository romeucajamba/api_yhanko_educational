import { FastifyRequest, FastifyReply } from "fastify";
import z from "zod";
import { getNotificationsFactory } from "./factory/getNotificationsFactory";

export async function getNotificationsController(request: FastifyRequest, reply: FastifyReply) {

  const paramsSchema = z.object({
    userId: z.string().uuid()
  })
  
  const { userId } = paramsSchema.parse(request.params)

  try {
    const get_notification = getNotificationsFactory()
    const notifications = await get_notification.execute(userId);
    reply.status(200).send(notifications);
  } catch (error) {
    reply.status(500).send({ error: "Erro ao buscar todas as notificassões" });
  }
}