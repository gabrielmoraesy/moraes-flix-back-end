// Importações
import { Request, Response } from "express";
import { container } from "tsyringe";
import { UpdateReviewUseCase } from "./UpdateReviewUseCase";
import { IUpdateReviewDTO } from "../../dtos/IUpdateReviewDTO";

class UpdateReviewController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { reviewId } = request.params
        const updatedReview = request.body as IUpdateReviewDTO

        const updateReviewUseCase = container.resolve(UpdateReviewUseCase);

        const review = await updateReviewUseCase.execute({
            reviewId, updatedReview
        });

        return response.status(201).json(review);
    }
}

export { UpdateReviewController };

