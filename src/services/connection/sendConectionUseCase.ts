import { ConnectionRepository } from "../../interfaces/connection";

export class SendConnectionRequestUseCase {
  constructor(private connectionRepository: ConnectionRepository) {}

  async execute(requesterId: string, receiverId: string) {
    return await this.connectionRepository.sendConnectionRequest(requesterId, receiverId);
  }
}
