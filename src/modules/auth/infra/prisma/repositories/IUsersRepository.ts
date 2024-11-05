import { User } from "@prisma/client";
import { AuthenticateUserDTO } from "../../../dtos/AuthenticateUserDTO";

export interface IUsersRepository {
    create(data: AuthenticateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}
