import { ConnectionDataBase } from "../../../models/connection/conecctionDataBase";
import { RemoveConnectionRequestUseCase } from "../../../services/connection/removeConnectionUseCase";

export function makeRemoveConnectionRequestUseCase() {
  const repository = new ConnectionDataBase();
  const useCase = new RemoveConnectionRequestUseCase(repository);
  return useCase;
};