import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { IUsersRepository } from "@/modules/auth/repositories/IUsersRepository.js";
import { LoginUserDTO } from "../../dtos/LoginUserDTO.js";

@injectable()
class AuthenticateUserUseCase {
    constructor(
        @inject("PrismaUsersRepository")
        private authenticateRepository: IUsersRepository,
    ) { }

    async execute({ email, password }: LoginUserDTO): Promise<{ token: string; user: UserDTO }> {
        const user = await this.authenticateRepository.findByEmail(email);
        const isPasswordValid = await bcrypt.compare(password, user!.password_hash)

        if (!user || !(isPasswordValid)) {
            throw new Error("Email ou senha estão incorretos");
        }

        const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET!, {
            expiresIn: "1h",
        });

        return { token, user: { id: user.id, email: user.email, name: user.name } };
    }
}

export { AuthenticateUserUseCase };
