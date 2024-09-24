import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { BadError } from "@/error/error";
import { upadatenameUseCase } from "./fatory/upadateNameFactory";

export async function updateNameController(request: FastifyRequest, reply: FastifyReply) {
    const bodySchema = z.object({
            name: z.string()
    });
    
    const { name } = bodySchema.parse(request.params);

    try {
        const changeName = upadatenameUseCase();

        await changeName.execute({id: request.user.sub, name});

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