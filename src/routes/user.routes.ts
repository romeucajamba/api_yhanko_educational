import { FastifyInstance} from "fastify";


export async fucntion UserRoutes(app: FastifyInstance){
    app.post('/user')
}
