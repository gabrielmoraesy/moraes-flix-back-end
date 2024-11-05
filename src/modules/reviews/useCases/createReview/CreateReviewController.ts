import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateReviewUseCase } from "./CreateReviewUseCase";
import { z } from "zod";

class CreateReviewController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createParamsReviewSchema = z.object({
            userId: z.string(),
            movieId: z.string()
        })

        const createBodyReviewSchema = z.object({
            rating: z.number(),
            comment: z.string()
        })

        const { userId, movieId } = createParamsReviewSchema.parse(request.params);
        const { rating, comment } = createBodyReviewSchema.parse(request.body);

        const createReviewUseCase = container.resolve(CreateReviewUseCase);

        try {
            const review = await createReviewUseCase.execute({
                rating,
                comment,
                userId,
                movieId
            });

            return response.status(201).json(review);
        } catch (error) {
            const errorMessage = (error as Error).message;
            return response.status(400).json({ error: errorMessage });
        }
    }
}

export { CreateReviewController };
