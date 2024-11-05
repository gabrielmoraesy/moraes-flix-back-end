import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteReviewUseCase } from "./DeleteReviewUseCase";
import { z } from "zod";

class DeleteReviewController {
    async handle(request: Request, response: Response): Promise<Response> {
        const createParamsReviewSchema = z.object({
            reviewId: z.string()
        })

        const { reviewId } = createParamsReviewSchema.parse(request.params);

        const deleteReviewUseCase = container.resolve(DeleteReviewUseCase);

        const review = await deleteReviewUseCase.execute({
            reviewId
        });

        return response.status(201).json(review);
    }
}

export { DeleteReviewController };

