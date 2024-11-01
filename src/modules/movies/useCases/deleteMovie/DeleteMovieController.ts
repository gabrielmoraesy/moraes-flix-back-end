// Importações
import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteMovieUseCase } from "./DeleteMovieUseCase";

class DeleteMovieController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;

        const deleteMovieUseCase = container.resolve(DeleteMovieUseCase);

        const movie = await deleteMovieUseCase.execute({ id });

        return response.status(200).send(movie);
    }
}

export { DeleteMovieController };
