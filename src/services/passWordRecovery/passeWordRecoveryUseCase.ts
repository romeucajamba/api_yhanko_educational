import { UserAuthenticate, UserRepository, UserResponse } from "@/interfaces/user";
import { hash } from "bcryptjs";
import { InvalidCredentials } from "../../error/error";

export class PasseWordRecoveryUseCase {
    constructor( private userRepository: UserRepository){}

    async execute(email:string, password: string): Promise<UserResponse>{

        const userEmail = await this.userRepository.findEmail(email);

        if(!userEmail){
            throw new InvalidCredentials("Email não cadastrado na plataforma")
        }

        const passwordMatches = await hash(password, 6);

        const user = await this.userRepository.recoveryPassWord(email, passwordMatches)

        return { user }
    }
}