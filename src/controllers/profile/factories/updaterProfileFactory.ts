import { ProfileDatabase } from "../../../models/profile/profieDataBase";
import { UserDatabase } from "../../../models/user/user-Database";
import { UpdateProfileDataUsecase } from "../../../services/profile/updateProfile";

export function updateProfileDataFactory(){
    const profileRepository = new ProfileDatabase();
    const userRepository =  new UserDatabase();
    const useCase = new UpdateProfileDataUsecase(profileRepository, userRepository);

    return useCase
}