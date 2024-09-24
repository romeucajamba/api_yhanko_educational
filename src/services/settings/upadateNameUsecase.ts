import { UserRepository, UserResponse } from "@/interfaces/user";
import { ResourceNotFound, BadError } from "../../error/error";

export class ChangeNamedUseCase {
    constructor( private userRepository: UserRepository){}

    async execute({name, id}: {name: string, id: string}): Promise <UserResponse>{
        const userId = await this.userRepository.findById(id);

        if(!userId){
             throw new ResourceNotFound("Usuário não encontrado!")
        }

        const user = await this.userRepository.changeName(id, name);

        if(!user){
            throw new BadError("Nome de usuário não encontrado e não alterado!")
        }

        return { user }
    }
}