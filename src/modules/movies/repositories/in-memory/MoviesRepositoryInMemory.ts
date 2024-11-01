import { ICreateMovieDTO } from "../../dtos/ICreateMovieDTO";
import { Movie, PrismaClient } from "@prisma/client";
import { IMoviesRepository } from "../IMoviesRepository";
import { IUpdateMovie, IUpdateMovieDTO } from "../../dtos/IUpdateMovieDTO";

const prisma = new PrismaClient();

class MoviesRepositoryInMemory implements IMoviesRepository {
    async create({
        title,
        description,
        genre,
        releaseYear,
        duration
    }: ICreateMovieDTO): Promise<Movie> {
        const movie = await prisma.movie.create({
            data: {
                title,
                description,
                genre,
                releaseYear,
                duration,
                createdAt: new Date(),
            },
        });

        return movie;
    }

    async delete(id: string): Promise<Movie> {
        const movie = await prisma.movie.delete({
            where: { id },
        });

        return movie;
    }

    async findMany(): Promise<Movie[]> {
        const movies = await prisma.movie.findMany();

        return movies
    }

    async findById(movieId: string): Promise<Movie | null> {
        const movie = await prisma.movie.findUnique({
            where: {
                id: movieId
            },
        });

        return movie;
    }

    async update(movieId: string, updatedMovie: IUpdateMovieDTO): Promise<Movie> {
        const movie = await prisma.movie.update({
            where: { id: movieId },
            data: {
                ...updatedMovie,
                updatedAt: new Date(),
            } as IUpdateMovie,
        });

        return movie;
    }
}

export { MoviesRepositoryInMemory };
