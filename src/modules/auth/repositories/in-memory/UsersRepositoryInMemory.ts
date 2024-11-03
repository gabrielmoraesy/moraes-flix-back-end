import { Prisma, PrismaClient, User } from "@prisma/client";
import { IAuthenticateUserDTO } from "../../dtos/IAuthenticateUserDTO";
import { IUsersRepository } from "../IUsersRepository.ts";

const prisma = new PrismaClient();
class UsersRepositoryInMemory implements IUsersRepository {
    async create({ email, password, name }: IAuthenticateUserDTO): Promise<User> {
        const user = await prisma.user.create({
            data: {
                email,
                name,
                password_hash: password,
            },
        });
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        return await prisma.user.findUnique({
            where: {
                email,
            },
        });
    }
}

export { UsersRepositoryInMemory };
