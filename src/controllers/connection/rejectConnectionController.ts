import { FastifyRequest, FastifyReply } from "fastify";
import { makeRejectConnectionRequestUseCase } from "./factories/rejectConnectionFactory";

export async function rejectConnectionController(request: FastifyRequest, reply: FastifyReply) {
    const { connectionId } = request.params as { connectionId: string };
    
    const useCase = makeRejectConnectionRequestUseCase();
  
    try {
      const connection = await useCase.execute(connectionId);
      return reply.status(200).send(connection);
    } catch (error) {
      return reply.status(400).send({ error: "Unable to rejected connection request" });
    }
}