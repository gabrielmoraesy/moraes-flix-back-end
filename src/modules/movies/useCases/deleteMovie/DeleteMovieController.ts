import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteMovieUseCase } from "./DeleteMovieUseCase";
import { z } from "zod";

class DeleteMovieController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createParamsMovieSchema = z.object({
            id: z.string()
        })

        const { id } = createParamsMovieSchema.parse(request.params);

        const deleteMovieUseCase = container.resolve(DeleteMovieUseCase);

        const movie = await deleteMovieUseCase.execute({ id });

        return response.status(200).send(movie);
    }
}

export { DeleteMovieController };
