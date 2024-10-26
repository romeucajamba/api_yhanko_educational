import 'fastify';

declare module 'fastify' {
    interface FastifyRequest {
        files?: {
            profilePicture?: Express.Multer.File[];
            coverPicture?: Express.Multer.File[];
        };
    }
}