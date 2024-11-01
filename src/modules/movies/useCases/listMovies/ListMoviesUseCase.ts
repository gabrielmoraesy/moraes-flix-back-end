import { inject, injectable } from "tsyringe";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";
import { Movie } from "@prisma/client";

@injectable()
class ListMoviesUseCase {
    constructor(
        @inject("MoviesRepositoryInMemory")
        private moviesRepository: IMoviesRepository,
    ) { }

    async execute(): Promise<Movie[]> {
        const movies = await this.moviesRepository.findMany();

        return movies
    }
}

export { ListMoviesUseCase };


