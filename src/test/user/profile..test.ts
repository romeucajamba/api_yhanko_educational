import { describe, test, expect } from "vitest";
import { InMemmoryRepository } from "../../models/user/in-memmory-database";
import { UserProfileUseCase } from "../../services/profile/profileUseCase";
import { hash } from "bcryptjs";
import { BadError } from "../../error/error";

describe("Get user profile", () => {
    test("It should be able to get user profile", async () => {

        const repsoitory = new InMemmoryRepository();
        const sut = new UserProfileUseCase(repsoitory);

       const createUser = await repsoitory.create({
            name: "Romeu Cajamba",
            email: "romeucajamba@gmail.com", 
            password_hash: await hash("Imaculada", 6),
            bornDate: "08/02/1999",
            country: "ANGOLA",
            expertise: "PRODUCT_MANAGER", 
            gender: "MALE",
        });

        const { user } = await sut.execute(createUser.id);

        expect(user.name).toEqual("Romeu Cajamba")

    });

    test("It should not be able to get profile with wrong id" , async () => {
        const repsoitory = new InMemmoryRepository();
        const sut = new UserProfileUseCase(repsoitory);

            await expect(() => sut.execute("non-existing-id")).rejects.toBeInstanceOf(BadError)
    });
})