import { AreaOfExpertise, Country, Gender, Prisma, Users } from "@prisma/client";

export interface RegisterUser{
    name: string,
    email: string,
    bornDate: Date,
    country: Country,
    expertise: AreaOfExpertise,
    gender: Gender,
    password: string
}

export interface UserRepository {
    create(data: Prisma.UsersCreateInput): Promise<Users>;
    findEmail(email: string): Promise<Users | null>
}

export interface UserResponse {
    registerUser: Users
}