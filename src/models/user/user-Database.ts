import { UserRepository } from "@/interfaces/user"
import { Prisma, Users } from "@prisma/client";
import { prisma } from "../db/dbConnect";

export class UserDatabase implements UserRepository {
    async findEmail(email: string): Promise<Users> {
        const user = await prisma.users.findFirst({
            where:{
                email
            }
        });

        if(!user){
            throw new Error('User not found')
        }

        return user
    }
    async create(data: Prisma.UsersCreateInput): Promise<Users> {
        const user = await prisma.users.create({
            data
        });
        
        return user;
    }
}