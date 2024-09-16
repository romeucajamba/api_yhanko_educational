import { FastifyInstance } from "fastify";
import { verifyJWT } from "@/middlewares/verify-jwt";

export async function profileRoutes(app: FastifyInstance) {
        //Permite que só os usuários autenticados vão conseguir chamar as rotas
    app.addHook('onRequest', verifyJWT)
}