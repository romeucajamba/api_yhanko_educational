import { FastifyReply, FastifyRequest } from "fastify";
import { z } from "zod";
import { BadRequest } from "@/error/error";

export async function settigIdiome(request: FastifyRequest, reply: FastifyReply) {
    const langParams = z.object({
            lang: z.string()
    });

    if (!langParams.safeParse(request.params)) {
        throw new BadRequest('Parâmetro inválido');
    }
    
    const { lang } = langParams.parse(request.params);

    reply.setCookie('lang', lang, { path: '/' });
    return { message: `Idioma alterado para ${lang}` };
}