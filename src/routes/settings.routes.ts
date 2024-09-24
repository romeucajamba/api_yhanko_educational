import { FastifyInstance } from "fastify";
import { updateNameController } from "../controlles/settings/upadatNameController";
import { passwordController } from "../controlles/settings/ChangePasswordController";

export async function settingRoutes(app: FastifyInstance) {
    app.get('/set/name', updateNameController);
    app.put('/set/password', passwordController);
}