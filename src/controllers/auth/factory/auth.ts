import { UserDatabase } from "@/models/user/user-Database";
import { AuthenticateCreateUserUseCase } from "@/services/auth/authUseCase";

export function authenticateUser(){
    const repository = new UserDatabase()
    const createUserUseCase = new AuthenticateCreateUserUseCase(repository);

    return createUserUseCase;
}