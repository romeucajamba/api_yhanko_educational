import { Prisma, Profile } from "@prisma/client";


export interface ProfileRepository{
    create(
        userId: string,
        bio:string | null | undefined,
        residence: string| null | undefined,
        tech: string| null | undefined,
        profilePictureUrl: string| null | undefined,
        coverPictureUrl: string| null | undefined
    ): Promise<Profile>
    update(
        id: string,
        bio?:string| null | undefined,
        residence?: string| null | undefined,
        tech?: string| null | undefined,
        profilePictureUrl?: string | null | undefined,
        coverPictureUrl?: string| null | undefined
    ): Promise <void>
}
