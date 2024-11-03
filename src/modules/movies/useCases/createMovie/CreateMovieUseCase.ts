import { inject, injectable } from "tsyringe";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";
import { Movie } from "@prisma/client";

interface IRequest {
    title: string;
    description: string;
    genre: string;
    releaseYear: number;
    duration: number;
    userId: string
}

@injectable()
class CreateMovieUseCase {
    constructor(
        @inject("MoviesRepositoryInMemory")
        private moviesRepository: IMoviesRepository,
    ) { }

    async execute({
        title, description, genre, releaseYear, duration, userId
    }: IRequest): Promise<Movie> {
        const movieData: ICreateMovieDTO = {
            title,
            description,
            genre,
            releaseYear,
            duration,
            userId,
        };

        const movie = await this.moviesRepository.create(movieData);

        return movie;
    }

}

export { CreateMovieUseCase };
