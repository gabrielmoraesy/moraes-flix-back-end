import { inject, injectable } from "tsyringe";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";
import { Movie } from "@prisma/client";

interface IRequest {
    id: string;
}

@injectable()
class ListMovieUseCase {
    constructor(
        @inject("MoviesRepositoryInMemory")
        private moviesRepository: IMoviesRepository,
    ) { }

    async execute({ id }: IRequest): Promise<Movie | null> {
        const movie = await this.moviesRepository.findById(id);

        return movie
    }
}

export { ListMovieUseCase };


