import { Request, Response } from "express";
import { RegisterUserUseCase } from "./RegisterUserUseCase";
import { container } from "tsyringe";
import { z } from "zod";

class RegisterUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createBodyUserSchema = z.object({
            name: z.string(),
            email: z.string().email(),
            password: z.string()
        })

        const { name, email, password } = createBodyUserSchema.parse(request.body);

        const registerUserUseCase = container.resolve(RegisterUserUseCase);

        try {
            await registerUserUseCase.execute({ name, email, password });
            return response.status(201).json({ message: "Usuário registrado com sucesso!" });
        } catch (error) {
            if (error instanceof Error && error.message.includes("já está cadastrado")) {
                return response.status(400).json({ error: error.message });
            }

            return response.status(500).json({ error: `Erro ao registrar o usuário.` });
        }
    }
}

export { RegisterUserController };
