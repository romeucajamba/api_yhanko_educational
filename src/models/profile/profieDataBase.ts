import { ProfileRepository } from "@/interfaces/profile"
import { Prisma, Profile, Users } from "@prisma/client";
import { prisma } from "../db/dbConnect";

export class ProfileDatabase implements ProfileRepository {

    async update(        
                id: string,
                bio?:string,
                residence?: string,
                tech?: string,
                profilePictureUrl?: string,
                coverPictureUrl?: string
            ): Promise<void> {
            const profile = await prisma.profile.update({
            where:{
                userId: id
            },
            data: {
                bio,
                residence,
                tech,
                profilePictureUrl,
                coverPictureUrl
            }
        });
    }

    async create(
        userId: string,
        bio:string | null | undefined,
        residence: string| null | undefined,
        tech: string| null | undefined,
        profilePictureUrl: string | null | undefined,
        coverPictureUrl: string | null | undefined
    ): Promise<Profile> {

        const profile = await prisma.profile.create({
            data:{
                bio,
                residence,
                tech,
                profilePictureUrl,
                coverPictureUrl,
                user: {
                    connect: { id: userId }, // Conecte ao ID do usuário existente
                },
            },

        });
        
        return profile;
    }
}