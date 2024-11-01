import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { container } from "tsyringe";

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { email, password } = request.body;

        try {
            const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);

            const token = await authenticateUserUseCase.execute({ email, password });
            return response.json({ token });
        } catch (error) {
            return response.status(401).json({ message: (error as Error).message });
        }
    }
}

export { AuthenticateUserController };
