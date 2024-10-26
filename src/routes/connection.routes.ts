import { FastifyInstance } from "fastify";
import { acceptConnectionRequestController } from "../controllers/connection/acceptConnectionController";
import { sendConnectionController } from "../controllers/connection/sendConnectionController";
import { removeConnectionController } from "../controllers/connection/removeConnectionControllers";
import { getConnectionController } from "../controllers/connection/getConnectionController";
import { rejectConnectionController } from "../controllers/connection/rejectConnectionController";
import { verifyJWT } from "@/middlewares/verify-jwt";


export async function connectionRoutes(app: FastifyInstance) {
  app.post("/connections/request", sendConnectionController );
  app.post("/connections/accept/:connectionId", acceptConnectionRequestController);
  app.delete('/connection/remove/:connectionId', removeConnectionController);
  app.addHook('onRequest', verifyJWT);
  app.get('/connections', getConnectionController);
  app.get('/connections/reject/:connectionId', rejectConnectionController)
}