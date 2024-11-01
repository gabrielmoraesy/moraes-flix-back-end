// auth/routes/authRoutes.ts
import { AuthenticateUserController } from "@/modules/auth/useCases/authenticateUser/AuthenticateUserController";
import { RegisterUserController } from "@/modules/auth/useCases/registerUser/RegisterUserController";
import { NextFunction, Request, Response, Router } from "express";

const authRoutes = Router();

const registerUserController = new RegisterUserController();
const authenticateUserController = new AuthenticateUserController();

authRoutes.post("/register", (request: Request, response: Response, next: NextFunction) => {
    registerUserController.handle(request, response).catch(next);
});

authRoutes.post("/login", (request: Request, response: Response, next: NextFunction) => {
    authenticateUserController.handle(request, response).catch(next);
});

export { authRoutes };

