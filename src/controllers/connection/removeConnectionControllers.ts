import { FastifyRequest, FastifyReply } from "fastify";
import { makeRemoveConnectionRequestUseCase } from "./factories/removeConnectionFactory";

export async function removeConnectionController(request: FastifyRequest, reply: FastifyReply) {
    const { connectionId } = request.params as { connectionId: string };
    
    const useCase = makeRemoveConnectionRequestUseCase();
  
    try {
      const connection = await useCase.execute(connectionId);
      return reply.status(200).send(connection);
    } catch (error) {
      return reply.status(400).send({ error: "Unable to removed connection request" });
    }
}