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
       const { user } = await authUserUsecase.execute({
          email, 
          password,
      });

      const token = await reply.jwtSign(
        {},
        {
            sign: {
                sub: user.id
            },
        }, 
      );

      const refreshToken = await reply.jwtSign(
        {},
        {
            sign: {
                sub: user.id,
                expiresIn: '7d'
            },
        }, 
      );


    return reply.setCookie('refreshToken', refreshToken, {
        path: '/',
        secure: true,
        sameSite: true,
        httpOnly: true
    } ).status(200).send({token});

  } catch (err) {
      if(err instanceof InvalidCredentials){
          return reply.status(404).send({message: err.message});
      }
      
      if(err instanceof BadRequest){
        return reply.status(402).send({message: "Não foi possível fazer o cadastro, por favor tente mais tarde"})
     }

      throw err
  }
}