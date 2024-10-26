import { ConnectionDataBase } from "../../../models/connection/conecctionDataBase";
import { SendConnectionRequestUseCase } from "../../../services/connection/sendConectionUseCase";

export function makeSendConnectionRequestUseCase() {
  const repository = new ConnectionDataBase();
  const useCase = new SendConnectionRequestUseCase(repository);
  return useCase;
};
