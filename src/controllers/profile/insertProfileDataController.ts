import { FastifyRequest, FastifyReply} from "fastify"
import { insertProfileDataFactory } from "./factories/insertProfileDataFactory";

export async function insertProfileDataController(
    request: FastifyRequest<{
        Body: {
            bio: string;
            residence: string;
            tech: string;
        };
        Files: {
            profilePicture?: Express.Multer.File[];
            coverPicture?: Express.Multer.File[];
        };
    }>,
    reply: FastifyReply
) {
    const { profilePicture, coverPicture } = request.files || {};

    const profilePictureUrl = profilePicture ? `/uploads/${profilePicture[0].filename}` : null;
    const coverPictureUrl = coverPicture ? `/uploads/${coverPicture[0].filename}` : null;

    try {
        const { bio, residence, tech } = request.body;

        const usecase = insertProfileDataFactory();
        const profile = await usecase.execute(
            request.user.sub,
            bio,
            residence,
            tech,
            profilePictureUrl,
            coverPictureUrl
        );

        return reply.send(profile);
    } catch (error) {
        reply.status(500).send({ error: "Erro ao inserir os dados do perfil" });
    }
}
