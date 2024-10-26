import { FastifyRequest, FastifyReply } from "fastify";
import z  from "zod";
import { BadError } from "@/error/error";
import { profileUseCase } from "./fatoryProfile";

export async function profileController(request: FastifyRequest, reply: FastifyReply){

    try {

      const getProfile = profileUseCase()
      const {user} = await getProfile.execute(
        request.user.sub
      );

      return reply.status(200).send({ 
        user: {
            ...user,
            password_hash: undefined
        } 
    });

  } catch (err) {
      if(err instanceof BadError){
          return reply.status(404).send({message: err.message});
      }

      throw err
  }
}