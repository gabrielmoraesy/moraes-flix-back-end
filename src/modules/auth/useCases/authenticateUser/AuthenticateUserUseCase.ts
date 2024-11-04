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

    async execute({ email, password }: ILoginUserDTO): Promise<{ token: string; user: IUser }> {
        const user = await this.authenticateRepository.findByEmail(email);

        if (!user || !(await bcrypt.compare(password, user.password_hash))) {
            throw new Error("Email ou senha estão incorretos");
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
            expiresIn: "1h",
        });

        return { token, user: { id: user.id, email: user.email, name: user.name } };
    }
}

export { AuthenticateUserUseCase };
