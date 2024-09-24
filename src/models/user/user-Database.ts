import { UserRepository } from "@/interfaces/user"
import { Prisma, Users } from "@prisma/client";
import { prisma } from "../db/dbConnect";

export class UserDatabase implements UserRepository {
    async changeName(id: string, name: string): Promise<Users> {
        const user = await prisma.users.update({
            where: {
                id
            },
            data: {
                name
            }
        });

        return user
    }

    async updatePassword(id: string, password_hash: string): Promise<Users> {
        const user = await prisma.users.update({
            where:{
                id
            },
            data: {
                password_hash
            }
        });

        return user
    }
    async findById(id: string): Promise<Users | null> {
        const user = await prisma.users.findUnique({
            where:{
                id
            }
        });

        return user
    }
    async findEmail(email: string): Promise<Users | null> {
        const user = await prisma.users.findUnique({
            where:{
                email
            }
        });

        return user
    }
    async create(data: Prisma.UsersCreateInput): Promise<Users> {
        const user = await prisma.users.create({
            data
        });
        
        return user;
    }
}