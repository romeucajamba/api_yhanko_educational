import { describe, test, expect } from "vitest";
import { CreateUserUseCase } from "../../services/user/createUserUseCase";
import { InMemmoryRepository } from "../../models/user/in-memmory-database";
import { beforeEach } from "node:test";
import { compare } from "bcryptjs";
import { EmailExists } from "../../error/error";

//let userRepository : InMemmoryRepository;
//let sut: CreateUserUseCase

/*beforeEach(() => {
    userRepository = new InMemmoryRepository();
    sut = new CreateUserUseCase(userRepository);
});*/

describe("Creatye user", async () => {

    test("It should be able to register user", async () => {

       const  userRepository = new InMemmoryRepository();
        const sut = new CreateUserUseCase(userRepository);

        const { user } = await sut.execute({
            name: "Romeu Cajamba",
            email: "romeucajamba@gmail.com", 
            password: "Imaculada",
            bornDate: "08/02/1999",
            country: "ANGOLA",
            expertise: "PRODUCT_MANAGER", 
            gender: "MALE",
        });

        expect(user.id).toEqual(expect.any(String))
    })

    test("It should hash user password upon registration", async () => {

        const  userRepository = new InMemmoryRepository();
         const sut = new CreateUserUseCase(userRepository);
 
         const { user } = await sut.execute({
             name: "Romeu Cajamba",
             email: "romeucajamba@gmail.com", 
             password: "Imaculada",
             bornDate: "08/02/1999",
             country: "ANGOLA",
             expertise: "PRODUCT_MANAGER", 
             gender: "MALE",
         });
 
         const isPasswordHashed = await compare(
             "Imaculada",
             user.password_hash
         )
 
         expect(isPasswordHashed).toBe(true);
     });
     test("It should not be able to register user with same email twince", async () => {

        const  userRepository = new InMemmoryRepository();
         const sut = new CreateUserUseCase(userRepository);

         const email = "romeucajamba@gmail.com"
 
          await sut.execute({
             name: "Romeu Cajamba",
             email, 
             password: "Imaculada",
             bornDate: "08/02/1999",
             country: "ANGOLA",
             expertise: "PRODUCT_MANAGER", 
             gender: "MALE",
         });
 
        expect(() =>
            sut.execute({
                name: "Romeu Cajamba",
                email, 
                password: "Imaculada",
                bornDate: "08/02/1999",
                country: "ANGOLA",
                expertise: "PRODUCT_MANAGER", 
                gender: "MALE",
        })).rejects.toBeInstanceOf(EmailExists)
     })
})
