import { ConnectionRepository } from "../../interfaces/connection";

export class RejectConnectionRequestUseCase {
  constructor(private connectionRepository: ConnectionRepository) {}

  async execute(connectionId: string) {
    return await this.connectionRepository.rejectConnectionRequest(connectionId);
  }
}