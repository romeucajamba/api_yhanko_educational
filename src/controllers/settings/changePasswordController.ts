import { BadError } from "@/error/error";
import { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";
import { passwordUseCase } from "./fatory/fatoryPassword.ts.js";

export async function passwordController(request: FastifyRequest, reply: FastifyReply){

    const bodySchema = z.object({
        newPassword: z.string({required_error: "The new password is require"}),
        lastPassword: z.string({required_error: "The last password is require"})
    });
     
    const paramsSchema = z.object({
      id: z.string().uuid(),
    });

    const { id } = paramsSchema.parse(request.params)
    const { newPassword, lastPassword } = bodySchema.parse(request.body);
    try {

      const changePassword = passwordUseCase()
      await changePassword.execute({
        id,
        newPassword, 
        lastPassword
    });

      return reply.status(200).send({ 
       message:"Palavra-passe alterada com sucesso ✔"
    });

  } catch (err) {
      if(err instanceof BadError){
          return reply.status(404).send({message: err.message});
      }

      throw err
  }
}