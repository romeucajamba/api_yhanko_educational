import { FastifyRequest, FastifyReply } from "fastify"

export async function verifyJWT(request: FastifyRequest, reply: FastifyReply){
    try {
        return await request.jwtVerify()
    } catch (err){
        return reply.status(401).send({message: "Não autorizado❌"})
    }
}