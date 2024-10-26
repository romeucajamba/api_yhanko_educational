import { UserDatabase } from "@/models/user/user-Database";
import { ChangeNamedUseCase } from "@/services/settings/upadateNameUsecase";

export function upadatenameUseCase(){
    const repository = new UserDatabase()
    const nameUseCase = new ChangeNamedUseCase(repository);

    return nameUseCase;
}