import { UserRepository, UserResponse, UserPassword } from "@/interfaces/user";
import { ResourceNotFound } from "../../error/error";
import { compare, hash } from "bcryptjs";



export class ChangePasswordUseCase {
    constructor( private userRepository: UserRepository){}

    async execute({lastPassword, newPassword, id}: UserPassword): Promise <UserResponse>{
        const userId = await this.userRepository.findById(id);

        if(!userId){
            throw new ResourceNotFound("Usuário não encontrado")
        }

        const isTheSamePassword = await compare(lastPassword, userId.password_hash);

        if(!isTheSamePassword){
            throw new ResourceNotFound("Palavra-passe antiga inválida")
        }

        const password_hash = await hash(newPassword, 6);
 
        const user = await this.userRepository.updatePassword(id, password_hash);

        return { user}
    }
}