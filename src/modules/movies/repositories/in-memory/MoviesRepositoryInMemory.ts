import { ICreateMovieDTO } from "../../dtos/ICreateMovieDTO";
import { Movie } from "@prisma/client";
import { IMoviesRepository } from "../IMoviesRepository";
import { v4 as uuidv4 } from 'uuid';

class MoviesRepositoryInMemory implements IMoviesRepository {
    private movies: Movie[] = [];

    async create({
        title, description, genre, releaseYear, duration
    }: ICreateMovieDTO): Promise<Movie> {
        const movie: Movie = {
            id: uuidv4(),
            title,
            description,
            genre,
            releaseYear,
            duration,
            createdAt: new Date()
        };

        this.movies.push(movie);

        return movie;
    }
}

export { MoviesRepositoryInMemory };
