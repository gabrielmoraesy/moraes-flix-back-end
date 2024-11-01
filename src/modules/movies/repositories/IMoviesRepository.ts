import { ICreateMovieDTO } from "../dtos/ICreateMovieDTO";
import { Movie } from "@prisma/client";

interface IMoviesRepository {
    create(data: ICreateMovieDTO): Promise<Movie>;
}

export { IMoviesRepository };
