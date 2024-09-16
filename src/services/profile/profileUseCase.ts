import { UserRepository, UserResponse } from "@/interfaces/user";
import { BadError } from "../../error/error";

export class UserProfileUseCase {
    constructor( private userRepository: UserRepository){}

    async execute(id: string): Promise<UserResponse>{

        const user = await this.userRepository.findById(id);

        if(!user){
            throw new BadError("Usuário não encontrado❌")
        }

        return { user }
    }
}