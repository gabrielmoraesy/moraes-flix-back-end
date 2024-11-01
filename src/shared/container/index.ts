import { UsersRepositoryInMemory } from "@/modules/auth/repositories/in-memory/UsersRepositoryInMemory";
import { IUsersRepository } from "@/modules/auth/repositories/IUsersRepository.ts";
import { RegisterUserUseCase } from "@/modules/auth/useCases/registerUser/RegisterUserUseCase";
import { IMoviesRepository } from "@/modules/movies/repositories/IMoviesRepository";
import { MoviesRepositoryInMemory } from "@/modules/movies/repositories/in-memory/MoviesRepositoryInMemory";
import { ReviewsRepositoryInMemory } from "@/modules/reviews/repositories/in-memory/ReviewsRepositoryInMemory";
import { IReviewsRepository } from "@/modules/reviews/repositories/IReviewsRepository";
import { container } from "tsyringe";

container.registerSingleton<IMoviesRepository>(
    "MoviesRepositoryInMemory",
    MoviesRepositoryInMemory
)

container.registerSingleton<IReviewsRepository>(
    "ReviewsRepositoryInMemory",
    ReviewsRepositoryInMemory
)

container.registerSingleton<IUsersRepository>(
    "UsersRepositoryInMemory",
    UsersRepositoryInMemory
)

container.registerSingleton("RegisterUserUseCase", RegisterUserUseCase);


