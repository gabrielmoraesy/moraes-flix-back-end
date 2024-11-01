import { inject, injectable } from "tsyringe";
import { IMoviesRepository } from "../../repositories/IMoviesRepository";
import { Movie } from "@prisma/client";
import { IUpdateMovieDTO } from "../../dtos/IUpdateMovieDTO";

interface IRequest {
    id: string;
    updatedMovie: IUpdateMovieDTO
}

type UpdateMovieData = IUpdateMovieDTO & { updatedAt: Date };

@injectable()
class UpdateMovieUseCase {
    constructor(
        @inject("MoviesRepositoryInMemory")
        private moviesRepository: IMoviesRepository,
    ) { }

    async execute({ id, updatedMovie }: IRequest): Promise<Movie> {
        const movie = await this.moviesRepository.update(id, {
            ...updatedMovie,
            updatedAt: new Date(),
        } as UpdateMovieData);

        return movie
    }
}

export { UpdateMovieUseCase };


