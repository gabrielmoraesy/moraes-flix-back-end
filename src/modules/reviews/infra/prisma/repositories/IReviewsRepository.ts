import { CreateReviewDTO } from "@/modules/reviews/dtos/CreateReviewDTO";
import { UpdateReviewDTO } from "@/modules/reviews/dtos/UpdateReviewDTO";
import { Review } from "@prisma/client";

interface IReviewsRepository {
    create(data: CreateReviewDTO): Promise<Review>;
    delete(reviewId: string): Promise<Review>;
    update(reviewId: string, updatedReview: UpdateReviewDTO): Promise<Review>;
    findReviewByUserAndMovie(userId: string, movieId: string): Promise<Review | null>;
}

export { IReviewsRepository };
