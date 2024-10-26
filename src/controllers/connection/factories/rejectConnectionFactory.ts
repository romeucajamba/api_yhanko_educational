import { ConnectionDataBase } from "../../../models/connection/conecctionDataBase";
import { RejectConnectionRequestUseCase } from "../../../services/connection/rejectConnectionUseCase";

export function makeRejectConnectionRequestUseCase() {
  const repository = new ConnectionDataBase();
  const useCase = new RejectConnectionRequestUseCase(repository)
};