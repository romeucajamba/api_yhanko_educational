import { FastifyInstance } from "fastify";
import { userController } from "../controlles/users/create/UserControllers";
import { authController } from "../controlles/users/auth/authController";
import { profileController } from "../controlles/profile/profileController";

export async function userRoutes(app: FastifyInstance) {
    app.post('/users', userController)
    app.post('/login', authController)
    app.get('/profile', profileController);
}