import { Review } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IDeleteReviewDTO } from "../../dtos/IDeleteReviewDTO";
import { IReviewsRepository } from "../../repositories/IReviewsRepository";
import { IUpdateReviewDTO } from "../../dtos/IUpdateReviewDTO";

interface IUpdate {
    reviewId: string
    updatedReview: IUpdateReviewDTO
}

type UpdateReviewData = IUpdate & { updatedAt: Date };

@injectable()
class UpdateReviewUseCase {
    constructor(
        @inject("ReviewsRepositoryInMemory")
        private reviewsRepository: IReviewsRepository,
    ) { }

    async execute({
        reviewId, updatedReview
    }: IUpdate): Promise<Review> {
        const review = await this.reviewsRepository.update(reviewId, {
            ...updatedReview,
            updatedAt: new Date()
        } as IUpdateReviewDTO);

        return review;
    }
}

export { UpdateReviewUseCase };

