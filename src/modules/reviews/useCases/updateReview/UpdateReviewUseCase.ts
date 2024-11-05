import { Review } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { UpdateReviewDTO } from "../../dtos/UpdateReviewDTO";
import { IReviewsRepository } from "../../infra/prisma/repositories/IReviewsRepository";

interface IUpdate {
    reviewId: string
    updatedReview: UpdateReviewDTO
}

type UpdateReviewData = IUpdate & { updatedAt: Date };

@injectable()
class UpdateReviewUseCase {
    constructor(
        @inject("PrismaReviewsRepository")
        private reviewsRepository: IReviewsRepository,
    ) { }

    async execute({
        reviewId, updatedReview
    }: IUpdate): Promise<Review> {
        const review = await this.reviewsRepository.update(reviewId, {
            ...updatedReview,
            updatedAt: new Date()
        } as UpdateReviewDTO);

        return review;
    }
}

export { UpdateReviewUseCase };

