import { FastifyInstance } from "fastify";
import { passwordController } from "../controlles/settings/ChangePasswordController";
import { updateNameController } from "../controlles/settings/upadatNameController";

export async function settingRoutes(app: FastifyInstance) {
    app.put('/set/:id/name', updateNameController);
    app.put('/set/:id/password', passwordController);
}