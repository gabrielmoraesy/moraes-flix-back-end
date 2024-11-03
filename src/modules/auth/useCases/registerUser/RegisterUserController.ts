// RegisterUserController.ts
import { Request, Response } from "express";
import { RegisterUserUseCase } from "./RegisterUserUseCase";
import { container } from "tsyringe";

class RegisterUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { name, email, password } = request.body;

        const registerUserUseCase = container.resolve(RegisterUserUseCase);

        try {
            await registerUserUseCase.execute({ name, email, password });
            return response.status(201).json({ message: "Usuário registrado com sucesso!" });
        } catch (error) {
            if (error instanceof Error && error.message.includes("já está cadastrado")) {
                return response.status(400).json({ error: error.message });
            }

            return response.status(500).json({ error: "Erro ao registrar o usuário." });
        }
    }
}

export { RegisterUserController };
