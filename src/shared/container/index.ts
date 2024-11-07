import { IUsersRepository } from "@/modules/auth/repositories/IUsersRepository.js";
import { PrismaMoviesRepository } from "@/modules/movies/infra/prisma/repositories/PrismaMoviesRepository";
import { IMoviesRepository } from "@/modules/movies/repositories/IMoviesRepository";
import { container } from "tsyringe";
import { PrismaUsersRepository } from "@/modules/auth/infra/prisma/repositories/PrismaUsersRepository";
import { PrismaReviewsRepository } from "@/modules/reviews/infra/prisma/repositories/PrismaReviewsRepository";
import { IReviewsRepository } from "@/modules/reviews/repositories/IReviewsRepository";
import { PrismaClient } from "@prisma/client";
import { prisma } from "../infra/http/PrismaClient";

container.registerSingleton<IMoviesRepository>(
    "PrismaMoviesRepository",
    PrismaMoviesRepository
)

container.registerSingleton<IReviewsRepository>(
    "PrismaReviewsRepository",
    PrismaReviewsRepository
)

container.registerSingleton<IUsersRepository>(
    "PrismaUsersRepository",
    PrismaUsersRepository
)

container.registerInstance(PrismaClient, prisma);


