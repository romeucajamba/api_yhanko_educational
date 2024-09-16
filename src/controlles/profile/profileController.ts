import { FastifyRequest, FastifyReply } from "fastify";
import z  from "zod";
import { BadError } from "@/error/error";
import { profileUseCase } from "./fatoryProfile";

export async function profileController(request: FastifyRequest, reply: FastifyReply){
      
    const profileBodySchema = z.object({
        id: z.string().uuid()
    });

    const { id } = profileBodySchema.parse(request.params);

      
    try {
      const getProfile = profileUseCase()
       await getProfile.execute(id);

  } catch (err) {
      if(err instanceof BadError){
          return reply.status(404).send({message: err.message});
      }

      throw err
  }

  return reply.status(200).send();
}