import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMoviesUseCase } from "./ListMoviesUseCase";

class ListMoviesController {
    async handle(request: Request, response: Response): Promise<Response> {
        const listMoviesUseCase = container.resolve(ListMoviesUseCase);

        const movies = await listMoviesUseCase.execute();

        return response.status(200).send(movies);
    }
}

export { ListMoviesController };

