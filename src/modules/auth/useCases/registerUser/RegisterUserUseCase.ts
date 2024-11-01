import { IAuthenticateUserDTO } from "../../dtos/IAuthenticateUserDTO";
import bcrypt from "bcryptjs";
import { inject } from "tsyringe";
import { IUsersRepository } from "../../repositories/IUsersRepository.ts";

class RegisterUserUseCase {
    constructor(
        @inject("UsersRepositoryInMemory")
        private authenticateRepository: IUsersRepository,
    ) { }

    async execute({ email, password, name }: IAuthenticateUserDTO): Promise<void> {
        const hashedPassword = await bcrypt.hash(password, 10);
        await this.authenticateRepository.create({ email, password: hashedPassword, name });
    }
}

export { RegisterUserUseCase };
