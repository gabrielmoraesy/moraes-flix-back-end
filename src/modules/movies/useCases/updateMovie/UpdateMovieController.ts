// Importações
import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateMovieUseCase } from "./UpdateMovieUseCase";

class UpdateMovieController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.params;
        const updatedMovie = request.body

        const updateMovieUseCase = container.resolve(UpdateMovieUseCase);

        const movie = await updateMovieUseCase.execute({ id, updatedMovie });

        return response.status(200).send(movie);
    }
}

export { UpdateMovieController };
