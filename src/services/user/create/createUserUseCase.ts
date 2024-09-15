import { EmailExists } from "../../../error/error";
import { hash } from "crypto";
import { RegisterUser } from "@/interfaces/user";
import { UserRepository } from "@/interfaces/user";
import { UserResponse } from "@/interfaces/user";

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
            throw new  EmailExists("Email já está cadastado na plataforma!")
        }
        
        const password_hash = await hash(password, 6);

        const registerUser = await this.userRepository.create(
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

        return { registerUser }
    }
}