import { ResourceNotFound } from "@/error/error";
import { ProfileRepository } from "../../interfaces/profile";
import { UserRepository } from "../../interfaces/user";

export class UpdateProfileDataUsecase {
    constructor(
        private profileRepository: ProfileRepository,
        private userRepository: UserRepository
    ){}

    async execute(
        userId: string,
        bio:string| null | undefined,
        residence: string| null | undefined,
        tech: string| null | undefined,
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