import { Movie, PrismaClient } from "@prisma/client";
import { IMoviesRepository } from "./IMoviesRepository";
import { UpdateMovie, UpdateMovieDTO } from "../../../dtos/UpdateMovieDTO";
import { inject, injectable } from "tsyringe";

@injectable()
class PrismaMoviesRepository implements IMoviesRepository {
    constructor(
        @inject(PrismaClient) private prisma: PrismaClient
    ) { }

    async create({
        title,
        description,
        genre,
        releaseYear,
        duration,
        userId,
    }: CreateMovieDTO): Promise<Movie> {
        const movie = await this.prisma.movie.create({
            data: {
                title,
                description,
                genre,
                releaseYear,
                duration,
                userId,
            },
        });

        return movie;
    }

    async delete(id: string): Promise<Movie> {
        const movie = await this.prisma.movie.delete({
            where: { id },
        });

        return movie;
    }

    async findMany(): Promise<Movie[]> {
        const movies = await this.prisma.movie.findMany({
            include: {
                reviews: true,
                user: {
                    select: {
                        name: true,
                        email: true,
                    },
                },
            },
        });

        return movies;
    }

    async findById(movieId: string): Promise<Movie | null> {
        const movie = await this.prisma.movie.findUnique({
            where: {
                id: movieId
            },
            include: {
                reviews: {
                    include: {
                        user: {
                            select: {
                                id: true,
                                name: true,
                                email: true,
                            },
                        },
                    },
                },
                user: {
                    select: {
                        name: true,
                        email: true,
                    },
                },
            },
        });

        return movie;
    }


    async update(movieId: string, updatedMovie: UpdateMovieDTO): Promise<Movie> {
        const movie = await this.prisma.movie.update({
            where: { id: movieId },
            data: {
                ...updatedMovie,
                updatedAt: new Date(),
            } as UpdateMovie,
        });

        return movie;
    }
}

export { PrismaMoviesRepository };

