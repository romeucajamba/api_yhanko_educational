import { AreaOfExpertise, Country, Gender, Prisma, Users } from "@prisma/client";

export interface RegisterUser{
    name: string,
    email: string,
    bornDate: string | Date,
    country: Country,
    expertise: AreaOfExpertise,
    gender: Gender,
    password: string
}

export interface UserPassword {
    lastPassword: string,
    newPassword: string,
    id: string
}
export interface UserRepository {
    create(data: Prisma.UsersCreateInput): Promise<Users>;
    findEmail(email: string): Promise<Users | null>
    findById(id: string): Promise<Users | null>;
    updatePassword(id: string, password_hash: string): Promise<Users>;
    changeName(id: string, name:string): Promise <Users>
}

export interface UserResponse {
    user: Users
}

export type UserAuthenticate = {
    email: string,
    password: string
}