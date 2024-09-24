import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { BadError } from "@/error/error";
import { upadatenameUseCase } from "./fatory/upadateNameFactory";

export async function updateNameController(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({
        name: z.string(),
            
    });

    const paramsSchema = z.object({
        id: z.string().uuid()
    });
    
    const { id } = paramsSchema.parse(request.params)
    
    const { name } = bodySchema.parse(request.body);

    try {
        const changeName = upadatenameUseCase();

        await changeName.execute({id, name});

        return reply.status(200).send({ 
            message:"Nome de usuário alterado com sucesso ✔"
         });
        
    } catch (err) {
        if(err instanceof BadError){
            console.log(err)
            return reply.status(404).send({message: err.message});
        }
  
        throw err
    }
}