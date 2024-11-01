import { Review } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { ICreateReviewDTO } from "../../dtos/ICreateReviewDTO";
import { IReviewsRepository } from "../../repositories/IReviewsRepository";

@injectable()
class CreateReviewUseCase {
    constructor(
        @inject("ReviewsRepositoryInMemory")
        private reviewsRepository: IReviewsRepository,
    ) { }

    async execute({
        rating, comment, userId, movieId
    }: ICreateReviewDTO): Promise<Review> {
        const reviewData: ICreateReviewDTO = {
            rating, comment, userId, movieId
        };

        const review = await this.reviewsRepository.create(reviewData);

        return review;
    }
}

export { CreateReviewUseCase };

