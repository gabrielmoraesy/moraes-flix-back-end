// Importações
import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListMovieUseCase } from "./ListMovieUseCase";

class ListMovieController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const listMovieUseCase = container.resolve(ListMovieUseCase);

        const movie = await listMovieUseCase.execute({ id });

        return response.status(200).send(movie);
    }
}

export { ListMovieController };

