import { UserRepository, UserResponse } from "@/interfaces/user";
import { ResourceNotFound } from "@/error/error";
import { compare, hash } from "bcryptjs";


export class ChangePasswordUseCase {
    constructor( private userRepository: UserRepository){}

    async execute(lastpassword: string, newPasswod: string, id: string): Promise <UserResponse>{
        const userId = await this.userRepository.findById(id);

        if(!userId){
            throw new ResourceNotFound("Usuário não encontrado")
        }

        const isTheSamePassword = compare(lastpassword, userId.password_hash);

        if(!isTheSamePassword){
            throw new ResourceNotFound("Palavra-passe antiga inválida")
        }

        const password_hash = await hash(newPasswod, 6);
 
        const user = await this.userRepository.updatePassword(id, password_hash);

        return { user}
    }
}