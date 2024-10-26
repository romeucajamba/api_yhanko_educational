import { FastifyRequest, FastifyReply } from "fastify";
import { makeSendConnectionRequestUseCase } from "./factories/sendConnectionFactory";

export async function sendConnectionController(request: FastifyRequest, reply: FastifyReply) {
  const { requesterId, receiverId } = request.body as { requesterId: string; receiverId: string };
  const useCase = makeSendConnectionRequestUseCase();

  try {
    const connection = await useCase.execute(requesterId, receiverId);
    return reply.status(201).send(connection);
  } catch (error) {
    return reply.status(400).send({ error: "Unable to send connection request" });
  }
}