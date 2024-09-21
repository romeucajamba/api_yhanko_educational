import { FastifyRequest, FastifyReply } from "fastify";
import z  from "zod";
import { BadError } from "@/error/error";
import { passwordUseCase } from "./fatory/fatoryPassword.ts";

export async function passwordController(request: FastifyRequest, reply: FastifyReply){

    const bodySchema = z.object({
        newPassword: z.string({required_error: "The new password is require"}),
        lastPassword: z.string({required_error: "The last password is require"})
    });

    const { newPassword, lastPassword } = bodySchema.parse(request.body);
    try {

      const changePassword = passwordUseCase()
      await changePassword.execute({
        request.user.sub,
        newPassword, 
        lastPassword
    });

      return reply.status(200).send({ 
       Message:"Palavra-passe alterada com sucesso ✔"
    });

  } catch (err) {
      if(err instanceof BadError){
          return reply.status(404).send({message: err.message});
      }

      throw err
  }
}