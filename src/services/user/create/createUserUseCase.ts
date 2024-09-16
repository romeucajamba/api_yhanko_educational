import { EmailExists } from "../../../error/error";
import { hash } from "bcryptjs";
import { RegisterUser, UserRepository, UserResponse } from "@/interfaces/user";

export class CreateUserUseCase {
    constructor(private userRepository: UserRepository){

    }
    async execute({
        name,
        email,
        bornDate,
        country,
        expertise,
        gender,
        password
    }: RegisterUser): Promise<UserResponse>{

        const userWithSameEmail = await this.userRepository.findEmail(email)
    
        if ( userWithSameEmail) {
            throw new  EmailExists("Usuário já está cadastado na plataforma!")
        }
        
        const password_hash = await hash(password, 6);

        const user = await this.userRepository.create(
            {
                name,
                email,
                bornDate,
                country,
                expertise,
                gender,
                password_hash
            }
        );

        return { user }
    }
}