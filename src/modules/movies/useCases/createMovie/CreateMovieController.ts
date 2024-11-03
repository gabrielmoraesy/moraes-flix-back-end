import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMovieUseCase } from "./CreateMovieUseCase";

interface ICreateMovieRequest {
    title: string;
    description: string;
    genre: string;
    releaseYear: number;
    duration: number;
    userId: string
}

class CreateMovieController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { title, description, genre, releaseYear, duration, userId } = request.body as ICreateMovieRequest;

        const createMovieUseCase = container.resolve(CreateMovieUseCase);

        const movie = await createMovieUseCase.execute({
            title,
            description,
            genre,
            releaseYear,
            duration,
            userId,
        });

        return response.status(201).json(movie);
    }

}

export { CreateMovieController };

