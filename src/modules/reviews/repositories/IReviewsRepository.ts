import { Review } from "@prisma/client";
import { ICreateReviewDTO } from "../dtos/ICreateReviewDTO";
import { IUpdateReviewDTO } from "../dtos/IUpdateReviewDTO";

interface IReviewsRepository {
    create(data: ICreateReviewDTO): Promise<Review>;
    delete(reviewId: string): Promise<Review>;
    update(reviewId: string, updatedReview: IUpdateReviewDTO): Promise<Review>;
    findReviewByUserAndMovie(userId: string, movieId: string): Promise<Review | null>;
}

export { IReviewsRepository };
