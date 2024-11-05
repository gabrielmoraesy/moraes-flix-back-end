import { Review } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { CreateReviewDTO } from "../../dtos/CreateReviewDTO";
import { IReviewsRepository } from "../../infra/prisma/repositories/IReviewsRepository";

@injectable()
class CreateReviewUseCase {
    constructor(
        @inject("PrismaReviewsRepository")
        private reviewsRepository: IReviewsRepository,
    ) { }

    async execute({ rating, comment, userId, movieId }: CreateReviewDTO): Promise<Review> {
        const existingReview = await this.reviewsRepository.findReviewByUserAndMovie(userId, movieId);

        if (existingReview) {
            throw new Error("Usuário já fez uma avaliação para este filme.");
        }

        const reviewData: CreateReviewDTO = {
            rating, comment, userId, movieId
        };

        const review = await this.reviewsRepository.create(reviewData);

        return review;
    }
}

export { CreateReviewUseCase };
