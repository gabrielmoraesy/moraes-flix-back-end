import { User } from "@prisma/client";
import { IAuthenticateUserDTO } from "../../dtos/IAuthenticateUserDTO";
import { v4 as uuidv4 } from "uuid";
import { IUsersRepository } from "../IUsersRepository.ts";

class UsersRepositoryInMemory implements IUsersRepository {
    private users: User[] = [];

    async create({ email, password, name }: IAuthenticateUserDTO): Promise<User> {
        const user: User = {
            id: uuidv4(),
            email,
            name,
            password_hash: password,
            createdAt: new Date(),
        };
        this.users.push(user);
        return user;
    }

    async findByEmail(email: string): Promise<User | null> {
        return this.users.find((user) => user.email === email) || null;
    }
}

export { UsersRepositoryInMemory };
