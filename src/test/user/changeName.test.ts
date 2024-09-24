import { describe, test, expect } from "vitest";
import { InMemmoryRepository } from "../../models/user/in-memmory-database";
import { ChangeNamedUseCase } from "../../services/settings/upadateNameUsecase";
import { ResourceNotFound } from "../../error/error";
import { hash } from "bcryptjs";

describe("Name use case", () => {
    test("It should be able to update name", async () => {

        const repsoitory = new InMemmoryRepository();
        const sut = new ChangeNamedUseCase(repsoitory);


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
            name: "Robson",
            id: createUser.id,
        });
        

        expect(user.name).toEqual(expect.any(String));

    });

    test("It should not be able to update name with wrong id", async () => {

        const repsoitory = new InMemmoryRepository();
        const sut = new ChangeNamedUseCase(repsoitory);


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
                name: "Robson",
                id: "ndfjjkfnfngfmgfklgfm,gfk",
            })).rejects.toBeInstanceOf(ResourceNotFound)

    });
})