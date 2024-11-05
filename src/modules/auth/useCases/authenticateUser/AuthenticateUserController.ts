import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";
import { container } from "tsyringe";
import { z } from "zod";

class AuthenticateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createBodyUserSchema = z.object({
            email: z.string(),
            password: z.string()
        })

        const { email, password } = createBodyUserSchema.parse(request.body);

        try {
            const authenticateUserUseCase = container.resolve(AuthenticateUserUseCase);
            const { token, user } = await authenticateUserUseCase.execute({ email, password });
            return response.json({ token, user: { id: user.id, email: user.email, name: user.name } });
        } catch (error) {
            return response.status(401).json({ message: (error as Error).message });
        }
    }
}

export { AuthenticateUserController };
