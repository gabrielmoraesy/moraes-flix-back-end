import bcrypt from "bcryptjs";
import { inject, injectable } from "tsyringe";
import { AuthenticateUserDTO } from "../../dtos/AuthenticateUserDTO.js";
import { IUsersRepository } from "@/modules/auth/repositories/IUsersRepository.js";

@injectable()
class RegisterUserUseCase {
    constructor(
        @inject("PrismaUsersRepository")
        private authenticateRepository: IUsersRepository,
    ) { }

    async execute({ email, password, name }: AuthenticateUserDTO): Promise<void> {
        const userAlreadyExists = await this.authenticateRepository.findByEmail(email);

        if (userAlreadyExists) {
            throw new Error("Este e-mail já está cadastrado. Tente fazer login ou usar outro e-mail.");
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        await this.authenticateRepository.create({ email, password: hashedPassword, name });
    }
}

export { RegisterUserUseCase };
