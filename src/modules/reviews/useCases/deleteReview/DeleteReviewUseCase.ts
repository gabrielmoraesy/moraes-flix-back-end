import { Review } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { DeleteReviewDTO } from "../../dtos/DeleteReviewDTO";
import { IReviewsRepository } from "../../infra/prisma/repositories/IReviewsRepository";

@injectable()
class DeleteReviewUseCase {
    constructor(
        @inject("PrismaReviewsRepository")
        private reviewsRepository: IReviewsRepository,
    ) { }

    async execute({
        reviewId
    }: DeleteReviewDTO): Promise<Review> {
        const review = await this.reviewsRepository.delete(reviewId);

        return review;
    }
}

export { DeleteReviewUseCase };

