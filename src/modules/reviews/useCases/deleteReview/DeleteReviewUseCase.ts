import { Review } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IDeleteReviewDTO } from "../../dtos/IDeleteReviewDTO";
import { IReviewsRepository } from "../../repositories/IReviewsRepository";

@injectable()
class DeleteReviewUseCase {
    constructor(
        @inject("ReviewsRepositoryInMemory")
        private reviewsRepository: IReviewsRepository,
    ) { }

    async execute({
        reviewId
    }: IDeleteReviewDTO): Promise<Review> {
        const review = await this.reviewsRepository.delete(reviewId);

        return review;
    }
}

export { DeleteReviewUseCase };

