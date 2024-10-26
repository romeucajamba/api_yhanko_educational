import { ConnectionRepository } from "../../interfaces/connection";

export class GetConnectionRequestUseCase {
  constructor(private connectionRepository: ConnectionRepository) {}

  async execute(userId: string) {
    return await this.connectionRepository.getConnections(userId);
  }
}