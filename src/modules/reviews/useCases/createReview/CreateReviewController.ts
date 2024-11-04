// CreateReviewController.ts
import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateReviewUseCase } from "./CreateReviewUseCase";

interface IRequestBody {
    rating: number;
    comment?: string;
}

class CreateReviewController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { rating, comment } = request.body as IRequestBody;
        const { userId, movieId } = request.params;

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
