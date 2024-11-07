import { inject, injectable } from "tsyringe";
import { IMoviesRepository } from "@/modules/movies/repositories/IMoviesRepository";
import { Movie } from "@prisma/client";

interface IRequest {
    id: string;
}

@injectable()
class ListMovieUseCase {
    constructor(
        @inject("PrismaMoviesRepository")
        private moviesRepository: IMoviesRepository,
    ) { }

    async execute({ id }: IRequest): Promise<Movie | null> {
        const movie = await this.moviesRepository.findById(id);

        return movie
    }
}

export { ListMovieUseCase };


