import { inject, injectable } from "tsyringe";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";
import { ICreateMovieDTO } from "../../dtos/ICreateMovieDTO";
import { Movie } from "@prisma/client";

interface IRequest {
    title: string;
    description: string;
    genre: string;
    releaseYear: number;
    duration: number;
}

@injectable()
class CreateMovieUseCase {
    constructor(
        @inject("MoviesRepositoryInMemory")
        private moviesRepository: IMoviesRepository,
    ) { }

    async execute({
        title, description, genre, releaseYear, duration
    }: IRequest): Promise<Movie> {
        const movieData: ICreateMovieDTO = {
            title,
            description,
            genre,
            releaseYear,
            duration,
        };

        const movie = await this.moviesRepository.create(movieData);

        return movie;
    }
}

export { CreateMovieUseCase };
