import { ConnectionDataBase } from "../../../models/connection/conecctionDataBase";
import { GetConnectionRequestUseCase } from "../../../services/connection/getConnectionUsCase";

export function makeGetConnectionRequestUseCase() {
  const repository = new ConnectionDataBase();
  const useCase = new GetConnectionRequestUseCase(repository)
  return useCase;
};