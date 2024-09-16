import { UserRepository } from "@/interfaces/user"
import { Prisma, Users } from "@prisma/client";
import { randomUUID } from "node:crypto";

export class InMemmoryRepository implements UserRepository {
    public users: Users[] = [];

    async findEmail(email: string): Promise<Users | null> {
        const user = this.users.find((user) => user.email === email);
        return user || null;
    }
    async create(data: Prisma.UsersCreateInput): Promise<Users> {
        
        let bornDateInput: string | Date = '1990-01-01'; // Pode ser string ou Date

        if (typeof bornDateInput === 'string') {
            bornDateInput = new Date(bornDateInput); // Converte para Date
        }

        const user: Users = {
            id: randomUUID(),
            name: data.name,
            email: data.email,
            password_hash: data.password_hash,
            bornDate: bornDateInput,
            expertise: data.expertise,
            country: data.country,
            gender: data.gender,
            createdAt: new Date(),
        };

        this.users.push(user);
        return user
    }


}