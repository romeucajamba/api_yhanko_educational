import { FastifyInstance } from "fastify";
import { passwordController } from "../controllers/settings/changePasswordController";
import { updateNameController } from "../controllers/settings/upadatNameController";

export async function settingRoutes(app: FastifyInstance) {
    app.put('/set/:id/name', updateNameController);
    app.put('/set/:id/password', passwordController);
}