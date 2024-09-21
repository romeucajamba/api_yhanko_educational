import { FastifyInstance } from "fastify";
import { settigIdiome } from "../controlles/settings/settingControllr";
import { passwordController } from "../controlles/settings/ChangePasswordController";

export async function settingRoutes(app: FastifyInstance) {
    app.get('/set-lang/:lang', settigIdiome);
    app.put('/set/password', passwordController);
}