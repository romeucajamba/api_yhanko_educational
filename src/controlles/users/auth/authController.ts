import { FastifyRequest, FastifyReply } from "fastify";
import z  from "zod";
import { InvalidCredentials, BadRequest } from "@/error/error";
import { authenticateUser } from "../factory/auth";

export async function authController(request: FastifyRequest, reply: FastifyReply){
      
    const authBodySchema = z.object({
        email: z.string({required_error: "Email is require"}).email().min(6),
        password: z.string().min(6),
    });

    const {email, password } = authBodySchema.parse(request.body);

      
    try {
      const authUserUsecase = authenticateUser()
       await authUserUsecase.execute({
          email, 
          password,
      });

  } catch (err) {
      if(err instanceof InvalidCredentials){
          return reply.status(404).send({message: err.message});
      }
      
      if(err instanceof BadRequest){
        return reply.status(402).send({message: "Não foi possível fazer o cadastro, por favor tente mais tarde"})
     }

      throw err
  }

  return reply.status(200).send("Seja bem-vindo de volta ✔");
}