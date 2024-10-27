import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import  cors  from '@fastify/cors';
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import http from "http";
import { Server } from "socket.io";

import { userRoutes } from "./routes/user.routes";
import { settingRoutes } from "./routes/settings.routes";
import { profileRoutes } from "./routes/profile.routes";
import { connectionRoutes } from "./routes/connection.routes";
import { notificationRoutes } from "./routes/notification.routes";
import { chatRoutes } from "./routes/chat.routes";
import { usageEventRoutes } from "./routes/analytics.routes";

export const app = fastify();

app.register(fastifyJwt, {
    secret: env.JWT_SECRET,
    cookie: {
        cookieName:'refreshToken',
        signed: false
    },
    
    sign: { expiresIn: '7d' }
});

app.register(fastifyCookie);

app.register(cors, {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE", "PATCH"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
});

// Configuração do Socket.IO no servidor HTTP
const server = http.createServer(app.server);

const io = new Server(server, {
  cors: { origin: "*" },
});

chatRoutes(io);
usageEventRoutes(io)
app.register(userRoutes);
app.register(settingRoutes);
app.register(profileRoutes);
app.register(connectionRoutes);
app.register(notificationRoutes)

app.setErrorHandler((error, _, reply) => {
    if(error instanceof ZodError){
        return reply.status(400).send({message: 'Validation error.', issues: error.format()})
    }

    if(env.NODE_ENV != 'production'){
        console.error(error)
    }

    else {
        //Utilizar ferramenta de observação para poder ser avisado que o erro aconteceu quando estiver em produção
    }

    return reply.status(500).send({message:'erro interno no servidor'})
})