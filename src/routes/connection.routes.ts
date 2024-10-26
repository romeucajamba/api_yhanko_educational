// src/routes/connectionRoutes.ts
import { FastifyInstance } from "fastify";
import { acceptConnectionRequestController } from "../controllers/connection/acceptConnectionController";
import { sendConnectionController } from "../controllers/connection/sendConnectionController";

export async function connectionRoutes(app: FastifyInstance) {
  app.post("/connections/request", sendConnectionController );
  app.post("/connections/accept/:connectionId", acceptConnectionRequestController);
}
