import { ResourceNotFound } from "@/error/error";
import { ProfileRepository } from "../../interfaces/profile";
import { UserRepository } from "../../interfaces/user";

export class InsertProfileDataUsecase {
    constructor(
        private profileRepository: ProfileRepository,
        private userRepository: UserRepository
    ){}

    async execute(
        userId: string,
        bio:string,
        residence: string,
        tech: string,
        profilePictureUrl: string | null | undefined,
        coverPictureUrl: string | null | undefined
    ){

        const getUserId = await this.userRepository.findById(userId);

        if(!getUserId){
            throw new ResourceNotFound('Usário não existe')
        }

        const userProfile = await this.profileRepository.create(
            userId,
            bio,
            residence,
            tech,
            profilePictureUrl,
            coverPictureUrl
        );

        return userProfile

    }
}