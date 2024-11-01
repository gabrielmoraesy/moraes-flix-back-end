// Importações
import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteReviewUseCase } from "./DeleteReviewUseCase";

class DeleteReviewController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { reviewId } = request.params

        const deleteReviewUseCase = container.resolve(DeleteReviewUseCase);

        const review = await deleteReviewUseCase.execute({
            reviewId
        });

        return response.status(201).json(review);
    }
}

export { DeleteReviewController };

