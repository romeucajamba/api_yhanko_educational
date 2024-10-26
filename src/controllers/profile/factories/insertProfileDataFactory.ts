import { ProfileDatabase } from "../../../models/profile/profieDataBase";
import { InsertProfileDataUsecase } from "../../../services/profile/insertprofileDataUseCase";
import { UserDatabase } from "../../../models/user/user-Database";

export function insertProfileDataFactory(){
    const profileRepository = new ProfileDatabase();
    const userRepository =  new UserDatabase();
    const useCase = new InsertProfileDataUsecase(profileRepository, userRepository);

    return useCase
}