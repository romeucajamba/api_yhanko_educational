import { FastifyRequest, FastifyReply } from "fastify";
import { makeAcceptConnectionRequestUseCase } from "./factories/acceptConnectionFactory";

export async function acceptConnectionRequestController(request: FastifyRequest, reply: FastifyReply) {
    const { connectionId } = request.params as { connectionId: string };
    const useCase = makeAcceptConnectionRequestUseCase();
  
    try {
      const connection = await useCase.execute(connectionId);
      return reply.status(200).send(connection);
    } catch (error) {
      return reply.status(400).send({ error: "Unable to accept connection request" });
    }
  }