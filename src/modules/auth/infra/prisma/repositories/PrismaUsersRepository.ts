import { PrismaClient, User } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { AuthenticateUserDTO } from "../../../dtos/AuthenticateUserDTO.js";
import { IUsersRepository } from "./IUsersRepository.js";

@injectable()
class PrismaUsersRepository implements IUsersRepository {
    constructor(
        @inject(PrismaClient) private prisma: PrismaClient
    ) { }

    async create({ email, password, name }: AuthenticateUserDTO): Promise<User> {
        const user = await this.prisma.user.create({
            data: {
                email,
                name,
                password_hash: password,
            },
        });
        return user;
    }


    async findByEmail(email: string): Promise<User | null> {
        return await this.prisma.user.findUnique({
            where: {
                email,
            },
        });
    }
}

export { PrismaUsersRepository };

