import { ConnectionRepository } from "../../interfaces/connection";

export class AcceptConnectionRequestUseCase {
  constructor(private connectionRepository: ConnectionRepository) {}

  async execute(connectionId: string) {
    return await this.connectionRepository.acceptConnectionRequest(connectionId);
  }
}