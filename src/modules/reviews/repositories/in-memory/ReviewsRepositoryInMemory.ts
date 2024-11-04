import { PrismaClient, Review } from "@prisma/client";
import { ICreateReviewDTO } from "../../dtos/ICreateReviewDTO";
import { IReviewsRepository } from "../IReviewsRepository";
import { IUpdateReviewDTO } from "../../dtos/IUpdateReviewDTO";

const prisma = new PrismaClient();

class ReviewsRepositoryInMemory implements IReviewsRepository {
    async create({ rating, comment, userId, movieId }: ICreateReviewDTO): Promise<Review> {
        const review = await prisma.review.create({
            data: {
                rating,
                comment,
                user: { connect: { id: userId } },
                movie: { connect: { id: movieId } }
            },
            include: {
                user: { select: { id: true, name: true, email: true } }
            }
        });
        return review;
    }

    async delete(id: string): Promise<Review> {
        const review = await prisma.review.delete({ where: { id } });
        return review;
    }

    async update(id: string, updatedReview: IUpdateReviewDTO): Promise<Review> {
        const review = await prisma.review.update({
            where: { id },
            data: updatedReview
        });
        return review;
    }

    async findReviewByUserAndMovie(userId: string, movieId: string): Promise<Review | null> {
        const review = await prisma.review.findFirst({
            where: {
                userId,
                movieId
            }
        });
        return review;
    }
}

export { ReviewsRepositoryInMemory };
