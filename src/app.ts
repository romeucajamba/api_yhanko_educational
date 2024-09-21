import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import  cors  from '@fastify/cors';
import fastifyJwt from "@fastify/jwt";
import fastifyCookie from "@fastify/cookie";
import i18n  from 'fastify-i18n';
import path from 'path';

import { userRoutes } from "./routes/user.routes"

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

app.register(i18n, {
    locales: ['en', 'pt-BR', 'fr', 'es', 'de'], 
    directory: path.join(__dirname, 'locales'), 
    defaultLocale: 'en',
    queryParameter: 'lang',
    cookie: 'lang', 
    autoReload: true, 
});
  
app.register(userRoutes);

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