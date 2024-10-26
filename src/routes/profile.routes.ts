import { FastifyInstance } from "fastify";
import { verifyJWT } from "@/middlewares/verify-jwt"; 
import { insertProfileDataController } from "../controllers/profile/insertProfileDataController";
import { uploadMiddleware } from "../adapter/multer";

export async function profileRoutes(app: FastifyInstance) {
        //Permite que só os usuários autenticados vão conseguir chamar as rotas
    app.addHook('onRequest', verifyJWT)
    app.post('/profile',  { 
        preHandler: uploadMiddleware,
    }, insertProfileDataController)
}