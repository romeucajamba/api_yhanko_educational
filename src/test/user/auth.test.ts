import { hash } from "bcryptjs";
import { describe, expect, test } from "vitest";
import { InvalidCredentials } from "../../error/error";
import { InMemmoryRepository } from "../../models/user/in-memmory-database";
import { AuthenticateCreateUserUseCase } from "../../services/auth/authUseCase";

describe("Authenticase use case", () => {
    test("It should be able to authenticate", async () => {

        const repsoitory = new InMemmoryRepository();
        const sut = new AuthenticateCreateUserUseCase(repsoitory);

        await repsoitory.create({
            name: "Romeu Cajamba",
            email: "romeucajamba@gmail.com", 
            password_hash: await hash("Imaculada", 6),
            bornDate: "08/02/1999",
            country: "ANGOLA",
            expertise: "PRODUCT_MANAGER", 
            gender: "MALE",
        })

        const { user } = await sut.execute({
            email: "romeucajamba@gmail.com",
            password: "Imaculada"
        });

        expect(user.id).toEqual(expect.any(String));
    });   

    test("It should be able to authenticate whit wrong password", async () => {

        const repsoitory = new InMemmoryRepository();
        const sut = new AuthenticateCreateUserUseCase(repsoitory);

        await repsoitory.create({
            name: "Romeu Cajamba",
            email: "romeucajamba@gmail.com", 
            password_hash: await hash("Imaculada12", 6),
            bornDate: "08/02/1999",
            country: "ANGOLA",
            expertise: "PRODUCT_MANAGER", 
            gender: "MALE",
        })

        expect(() => 
            sut.execute({
                email: "romeucajamba@gmail.com",
                password: "Imaculada"
            })
        ).rejects.toBeInstanceOf(InvalidCredentials)
    });

    test("It should be able to authenticate whit wrong email", async () => {

        const repsoitory = new InMemmoryRepository();
        const sut = new AuthenticateCreateUserUseCase(repsoitory);

        await repsoitory.create({
            name: "Romeu Cajamba",
            email: "romeucajamba123@gmail.com", 
            password_hash: await hash("Imaculada12", 6),
            bornDate: "08/02/1999",
            country: "ANGOLA",
            expertise: "PRODUCT_MANAGER", 
            gender: "MALE",
        })

        expect(() => 
            sut.execute({
                email: "romeucajamba@gmail.com",
                password: "Imaculada12"
            })
        ).rejects.toBeInstanceOf(InvalidCredentials)
    });
})