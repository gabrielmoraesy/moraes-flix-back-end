import { ICreateMovieDTO } from "../dtos/ICreateMovieDTO";
import { Movie } from "@prisma/client";
import { IUpdateMovieDTO } from "../dtos/IUpdateMovieDTO";

interface IMoviesRepository {
    create(data: ICreateMovieDTO): Promise<Movie>;
    delete(movieId: string): Promise<Movie>;
    findMany(): Promise<Movie[]>;
    findById(movieId: string): Promise<Movie | null>
    update(movieId: string, updatedMovie: IUpdateMovieDTO): Promise<Movie>
}

export { IMoviesRepository };
