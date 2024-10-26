// src/controllers/ConnectionController.ts
import { FastifyRequest, FastifyReply } from "fastify";
import { makeSendConnectionRequestUseCase, makeAcceptConnectionRequestUseCase } from "../factories/ConnectionUseCasesFactory";

export async function sendConnectionRequestController(request: FastifyRequest, reply: FastifyReply) {
  const { requesterId, receiverId } = request.body as { requesterId: string; receiverId: string };
  const useCase = makeSendConnectionRequestUseCase();

  try {
    const connection = await useCase.execute(requesterId, receiverId);
    return reply.status(201).send(connection);
  } catch (error) {
    return reply.status(400).send({ error: "Unable to send connection request" });
  }
}

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

// Outros controladores para rejeitar, remover e obter conexões
