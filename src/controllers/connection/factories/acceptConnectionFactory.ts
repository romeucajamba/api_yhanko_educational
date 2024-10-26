import { ConnectionDataBase } from "../../../models/connection/conecctionDataBase";
import { AcceptConnectionRequestUseCase } from "../../../services/connection/acceptConnectionUseCase";

export function makeAcceptConnectionRequestUseCase() {
  const repository = new ConnectionDataBase();
  const useCase = new AcceptConnectionRequestUseCase(repository)
};