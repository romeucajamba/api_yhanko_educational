import { CreateUserUseCase } from "@/services/user/createUserUseCase";
import { UserDatabase } from "@/models/user/user-Database";

export function createUser(){
    const repository = new UserDatabase()
    const createUserUseCase = new CreateUserUseCase(repository);

    return createUserUseCase;
}