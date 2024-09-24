import { UserRepository } from "@/interfaces/user"
import { Prisma, Users } from "@prisma/client";
import { randomUUID } from "node:crypto";

export class InMemmoryRepository implements UserRepository {
    public users: Users[] = [];

    async changeName(id: string, name: string): Promise<Users> {
        const user = this.users.find((user) => user.id === id);
        
        if (!user) {
            throw new Error(`User with id ${id} not found`); 
        }
    
        user.name = name;
    
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password_hash: user.password_hash,
            bornDate: user.bornDate,
            expertise: user.expertise,
            country: user.country,
            gender: user.gender,
            createdAt: user.createdAt
        };
    }

    async updatePassword(id: string, password_hash: string): Promise<Users> {
        const user = this.users.find((user) => user.id === id);
        
        if (!user) {
            throw new Error(`User with id ${id} not found`); 
        }
    
        user.password_hash = password_hash;
    
        return {
            id: user.id,
            name: user.name,
            email: user.email,
            password_hash: user.password_hash,
            bornDate: user.bornDate,
            expertise: user.expertise,
            country: user.country,
            gender: user.gender,
            createdAt: user.createdAt
        };
    }
    

    async findById(id: string): Promise<Users | null> {
        const user = this.users.find((user) => user.id === id);
        return user || null;  
    }

    async findEmail(email: string): Promise<Users | null> {
        const user = this.users.find((user) => user.email === email);
        return user || null;
    }
    async create(data: Prisma.UsersCreateInput): Promise<Users> {
        
        let bornDateInput: string | Date = '1990-01-01'; 

        if (typeof bornDateInput === 'string') {
            bornDateInput = new Date(bornDateInput);
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