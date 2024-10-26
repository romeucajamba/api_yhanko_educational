import { ConnectionRepository } from "../../interfaces/connection";

export class RemoveConnectionRequestUseCase {
  constructor(private connectionRepository: ConnectionRepository) {}

  async execute(connectionId: string) {
    return await this.connectionRepository.removeConnection(connectionId);
  }
}