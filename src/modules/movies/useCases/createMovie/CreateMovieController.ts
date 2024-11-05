import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateMovieUseCase } from "./CreateMovieUseCase";
import { z } from "zod";

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
        const createBodyMovieSchema = z.object({
            title: z.string(),
            description: z.string(),
            genre: z.string(),
            releaseYear: z.number(),
            duration: z.number(),
            userId: z.string()
        })

        const { title, description, genre, releaseYear, duration, userId } = createBodyMovieSchema.parse(request.body);

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

