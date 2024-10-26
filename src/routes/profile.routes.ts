import { FastifyInstance } from "fastify";
import { verifyJWT } from "@/middlewares/verify-jwt"; 
import { insertProfileDataController } from "../controllers/profile/insertProfileDataController";
import { updateProfileDataController } from "../controllers/profile/updateProfileController";
import { uploadMiddleware } from "../adapter/multer";

export async function profileRoutes(app: FastifyInstance) {
    app.addHook('onRequest', verifyJWT)

    app.post('/profile',  { 
        preHandler: uploadMiddleware,
    }, insertProfileDataController);
    
    app.put('/profile/update',{ 
        preHandler: uploadMiddleware,
    }, updateProfileDataController)
}