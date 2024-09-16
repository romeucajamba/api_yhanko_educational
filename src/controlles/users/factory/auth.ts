import { AuthenticateCreateUserUseCase } from "@/services/user/auth/authUseCase";
import { UserDatabase } from "@/models/user/user-Database";

export function authenticateUser(){
    const repository = new UserDatabase()
    const createUserUseCase = new AuthenticateCreateUserUseCase(repository);

    return createUserUseCase;
}