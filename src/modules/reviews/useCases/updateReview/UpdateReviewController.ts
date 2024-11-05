import { Request, Response } from "express";
import { container } from "tsyringe";
import { z } from "zod";
import { UpdateReviewUseCase } from "./UpdateReviewUseCase";

class UpdateReviewController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createParamsReviewSchema = z.object({
            reviewId: z.string()
        })

        const createBodyReviewSchema = z.object({
            rating: z.number(),
            comment: z.string()
        })

        const { reviewId } = createParamsReviewSchema.parse(request.params);
        const updatedReview = createBodyReviewSchema.parse(request.body);

        const updateReviewUseCase = container.resolve(UpdateReviewUseCase);

        const review = await updateReviewUseCase.execute({
            reviewId, updatedReview
        });

        return response.status(201).json(review);
    }
}

export { UpdateReviewController };

