import { FastifyInstance } from "fastify";
import { userController } from "../controllers/users/create/UserControllers";
import { authController } from "../controllers/auth/authController";
import { profileController } from "../controllers/profile/profileController";
import { verifyJWT } from "@/middlewares/verify-jwt";
import { refreshTokenController } from "../controllers/auth/refreshTokent";
import { recoverPassWordController } from "../controllers/recoveryPassword/recoveryPasswordController";

export async function userRoutes(app: FastifyInstance) {
    app.post('/users', userController);
    app.post('/login', authController);
    app.get('/me', {onRequest: [verifyJWT]}, profileController);
    app.patch('/token/refresh', refreshTokenController);
    app.put('/recovery', recoverPassWordController)
}