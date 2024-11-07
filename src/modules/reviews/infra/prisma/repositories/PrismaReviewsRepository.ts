import { PrismaClient, Review } from "@prisma/client";
import { CreateReviewDTO } from "@/modules/reviews/dtos/CreateReviewDTO";
import { UpdateReviewDTO } from "@/modules/reviews/dtos/UpdateReviewDTO";
import { inject, injectable } from "tsyringe";
import { IReviewsRepository } from "@/modules/reviews/repositories/IReviewsRepository";

@injectable()
class PrismaReviewsRepository implements IReviewsRepository {
    constructor(
        @inject(PrismaClient) private prisma: PrismaClient
    ) { }

    async create({ rating, comment, userId, movieId }: CreateReviewDTO): Promise<Review> {
        const review = await this.prisma.review.create({
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
        const review = await this.prisma.review.delete({ where: { id } });
        return review;
    }

    async update(id: string, updatedReview: UpdateReviewDTO): Promise<Review> {
        const review = await this.prisma.review.update({
            where: { id },
            data: updatedReview
        });
        return review;
    }

    async findReviewByUserAndMovie(userId: string, movieId: string): Promise<Review | null> {
        const review = await this.prisma.review.findFirst({
            where: {
                userId,
                movieId
            }
        });
        return review;
    }
}

export { PrismaReviewsRepository };
