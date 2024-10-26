import { FastifyRequest, FastifyReply } from "fastify";
import z  from "zod";
import { InvalidCredentials, BadRequest } from "@/error/error";
import { recoveryPasswordFactorty } from "./factory/recoveryPasswordFactory";

export async function recoverPassWordController(request: FastifyRequest, reply: FastifyReply){
      
    const bodySchema = z.object({
        email: z.string({required_error: "Email is require"}).email().min(6),
        password: z.string().min(6),
    });

    const {email, password } = bodySchema.parse(request.body);

      
    try {
      const usecase = recoveryPasswordFactorty()
       const user = await usecase.execute(
          email, 
          password,
      );

    return reply.status(204).send({});

  } catch (err) {
      if(err instanceof InvalidCredentials){
          return reply.status(404).send({message: err.message});
      }
      
      if(err instanceof BadRequest){
        return reply.status(402).send({message: "Não foi possível fazer a recoperação da palavra-passe!"})
     }

      throw err
  }
}