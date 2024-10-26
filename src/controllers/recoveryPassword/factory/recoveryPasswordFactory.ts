import { PasseWordRecoveryUseCase } from "../../../services/passWordRecovery/passeWordRecoveryUseCase";
import { UserDatabase } from "../../../models/user/user-Database";

export function recoveryPasswordFactorty(){
    const userRepository = new UserDatabase()
    const useCase = new PasseWordRecoveryUseCase(userRepository)

    return useCase;
}