import { FastifyRequest, FastifyReply } from "fastify";
import { makeGetConnectionRequestUseCase } from "./factories/getConnectionFactory";

export async function getConnectionController(request: FastifyRequest, reply: FastifyReply) {
    
    const useCase = makeGetConnectionRequestUseCase();
  
    try {
      const connection = await useCase.execute(request.user.sub);
      return reply.status(200).send(connection);
    } catch (error) {
      return reply.status(400).send({ error: "Unable to get connection request" });
    }
}