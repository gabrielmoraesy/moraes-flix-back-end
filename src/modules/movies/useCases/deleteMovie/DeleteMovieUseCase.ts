import { inject, injectable } from "tsyringe";
import { IMoviesRepository } from "../../infra/prisma/repositories/IMoviesRepository";
import { Movie } from "@prisma/client";

interface IRequest {
    id: string;
}

@injectable()
class DeleteMovieUseCase {
    constructor(
        @inject("PrismaMoviesRepository")
        private moviesRepository: IMoviesRepository,
    ) { }

    async execute({ id }: IRequest): Promise<Movie> {
        const movie = await this.moviesRepository.delete(id);

        return movie
    }
}

export { DeleteMovieUseCase };


