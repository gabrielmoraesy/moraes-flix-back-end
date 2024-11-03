import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { ILoginUserDTO } from "../../dtos/ILoginUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository.ts";

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("UsersRepositoryInMemory")
        private authenticateRepository: IUsersRepository,
    ) { }

    async execute({ email, password }: ILoginUserDTO): Promise<string> {
        const user = await this.authenticateRepository.findByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password_hash))) {
            throw new Error("Invalid email or password");
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
            expiresIn: "1h",
        });

        return token;
    }
}

export { AuthenticateUserUseCase };
