import { UserAuthenticate, UserRepository, UserResponse} from "@/interfaces/user";
import { InvalidCredentials } from "../../../error/error";
import { compare } from "bcryptjs";

export class AuthenticateCreateUserUseCase {
    constructor( private userRepository: UserRepository){}

    async execute({email, password}:UserAuthenticate): Promise<UserResponse>{

        const user = await this.userRepository.findEmail(email);

        if(!user){
            throw new InvalidCredentials("Email não cadastrado na plataforma")
        }

        const doesPasswordMatches = await compare(password, user.password_hash);

        if(!doesPasswordMatches){
            throw new InvalidCredentials("Palavra-passe inválida")
        }

        return { user }
    }
}