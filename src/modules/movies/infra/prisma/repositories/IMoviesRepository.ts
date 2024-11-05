import { Movie } from "@prisma/client";
import { UpdateMovieDTO } from "../../../dtos/UpdateMovieDTO";
interface IMoviesRepository {
    create(data: CreateMovieDTO): Promise<Movie>;
    delete(movieId: string): Promise<Movie>;
    findMany(): Promise<Movie[]>;
    findById(movieId: string): Promise<Movie | null>
    update(movieId: string, updatedMovie: UpdateMovieDTO): Promise<Movie>
}

export { IMoviesRepository };
