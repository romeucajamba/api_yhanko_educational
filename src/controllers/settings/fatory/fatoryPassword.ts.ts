import { UserDatabase } from "@/models/user/user-Database";
import { ChangePasswordUseCase } from "@/services/settings/changePasswordUseCase";

export function passwordUseCase(){
    const repository = new UserDatabase()
    const passwordUseCase = new ChangePasswordUseCase(repository);

    return passwordUseCase;
}