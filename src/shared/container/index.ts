import { IMoviesRepository } from "@/modules/movies/repositories/IMoviesRepository";
import { MoviesRepositoryInMemory } from "@/modules/movies/repositories/in-memory/MoviesRepositoryInMemory";
import { container } from "tsyringe";

container.registerSingleton<IMoviesRepository>(
    "MoviesRepositoryInMemory",
    MoviesRepositoryInMemory
)

