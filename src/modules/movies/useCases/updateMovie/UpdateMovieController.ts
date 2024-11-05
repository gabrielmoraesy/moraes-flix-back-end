import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateMovieUseCase } from "./UpdateMovieUseCase";
import { z } from "zod";

class UpdateMovieController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createParamsMovieSchema = z.object({
            id: z.string()
        })

        const createBodyMovieSchema = z.object({
            title: z.string(),
            description: z.string(),
            genre: z.string(),
            releaseYear: z.number(),
            duration: z.number(),
        })

        const { id } = createParamsMovieSchema.parse(request.params);
        const updatedMovie = createBodyMovieSchema.parse(request.body);

        const updateMovieUseCase = container.resolve(UpdateMovieUseCase);

        const movie = await updateMovieUseCase.execute({ id, updatedMovie });

        return response.status(200).send(movie);
    }
}

export { UpdateMovieController };
