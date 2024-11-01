import { User } from "@prisma/client";
import { IAuthenticateUserDTO } from "../dtos/IAuthenticateUserDTO";

export interface IUsersRepository {
    create(data: IAuthenticateUserDTO): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
}
