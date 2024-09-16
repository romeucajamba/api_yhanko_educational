import fastify from "fastify";
import { ZodError } from "zod";
import { env } from "./env";
import  cors  from '@fastify/cors';
import { userRoutes } from "./routes/user.routes"


export const app = fastify();

app.register(cors, {
    origin: ["http://localhost:3000"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
    allowedHeaders: ["Content-Type", "Authorization"],
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