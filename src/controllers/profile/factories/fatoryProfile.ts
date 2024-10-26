import { UserDatabase } from "@/models/user/user-Database";
import { UserProfileUseCase } from "@/services/profile/profileUseCase";

export function profileUseCase(){
    const repository = new UserDatabase()
    const profileUseCase = new UserProfileUseCase(repository);

    return profileUseCase;
}