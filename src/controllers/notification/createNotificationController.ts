import { FastifyRequest, FastifyReply } from "fastify";
import z from "zod";
import { createNotificationFactory } from "./factory/createNotificationFactory";

export async function createNotificationController(request: FastifyRequest, reply: FastifyReply) {

  const schemaBody = z.object({
    message: z.string(),
    type: z.enum(["LIKE", "COMMENT", "MESSAGE", "FOLLOW"])
  });

  const paramsSchema = z.object({
    userId: z.string().uuid()
  })
  
  const { message, type } = schemaBody.parse(request.body);
  const { userId } = paramsSchema.parse(request.params)

  try {
    const createNotiication = createNotificationFactory()
    const notification = await createNotiication.execute({ userId, message, type });
    reply.status(201).send(notification);
  } catch (error) {
    reply.status(500).send({ error: "Erro ao criar notificação" });
  }
}