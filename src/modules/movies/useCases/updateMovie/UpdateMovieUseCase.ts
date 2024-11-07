import { inject, injectable } from "tsyringe";
import { IMoviesRepository } from "@/modules/movies/repositories/IMoviesRepository";
import { Movie } from "@prisma/client";
import { UpdateMovieDTO } from "../../dtos/UpdateMovieDTO";

interface IRequest {
    id: string;
    updatedMovie: UpdateMovieDTO
}

type UpdateMovieData = UpdateMovieDTO & { updatedAt: Date };

@injectable()
class UpdateMovieUseCase {
    constructor(
        @inject("PrismaMoviesRepository")
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


