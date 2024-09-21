import { describe, test, expect } from "vitest";
import { InMemmoryRepository } from "../../models/user/in-memmory-database";
import { ChangePasswordUseCase } from "../../services/settings/changePasswordUseCase"
import { compare, hash } from "bcryptjs";
import { ResourceNotFound } from "../../error/error";

describe("Password use case", () => {
    test("It should be able to update password", async () => {

        const repsoitory = new InMemmoryRepository();
        const sut = new ChangePasswordUseCase(repsoitory);


       const createUser = await repsoitory.create({
            name: "Romeu Cajamba",
            email: "romeucajamba@gmail.com", 
            password_hash: await hash("Imaculada", 6),
            bornDate: "08/02/1999",
            country: "ANGOLA",
            expertise: "PRODUCT_MANAGER", 
            gender: "MALE",
        });

        const { user } = await sut.execute({
            lastPassword: "Imaculada", 
            newPassword: "Robson",
            id: createUser.id,
        });
        

        expect(user.password_hash).toEqual(expect.any(String))

    });

    test("It should not be able to update password with wrong last password", async () => {

        const repsoitory = new InMemmoryRepository();
        const sut = new ChangePasswordUseCase(repsoitory);


       const createUser = await repsoitory.create({
            name: "Romeu Cajamba",
            email: "romeucajamba@gmail.com", 
            password_hash: await hash("Imaculada", 6),
            bornDate: "08/02/1999",
            country: "ANGOLA",
            expertise: "PRODUCT_MANAGER", 
            gender: "MALE",
        });

        await expect( () =>  sut.execute({
                lastPassword: "Imaculada23@", 
                newPassword: "Robson",
                id: createUser.id,
            })).rejects.toBeInstanceOf(ResourceNotFound)

    });
})