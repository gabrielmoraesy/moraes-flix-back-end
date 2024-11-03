import { CreateMovieController } from "@/modules/movies/useCases/createMovie/CreateMovieController";
import { DeleteMovieController } from "@/modules/movies/useCases/deleteMovie/DeleteMovieController";
import { ListMovieController } from "@/modules/movies/useCases/listMovie/ListMovieController";
import { ListMoviesController } from "@/modules/movies/useCases/listMovies/ListMoviesController";
import { UpdateMovieController } from "@/modules/movies/useCases/updateMovie/UpdateMovieController";
import { Router, Request, Response, NextFunction } from "express";
import { authMiddleware } from "../middlewares/auth";

const moviesRoutes = Router();

const createMovieController = new CreateMovieController();
const deleteMovieController = new DeleteMovieController();
const listMoviesController = new ListMoviesController();
const listMovieController = new ListMovieController();
const updateMovieController = new UpdateMovieController();

moviesRoutes.post("/", authMiddleware, (request: Request, response: Response, next: NextFunction) => {
    createMovieController.handle(request, response).catch(next);
});

moviesRoutes.delete("/:id", authMiddleware, (request: Request, response: Response, next: NextFunction) => {
    deleteMovieController.handle(request, response).catch(next);
});

moviesRoutes.get("/", authMiddleware, (request: Request, response: Response, next: NextFunction) => {
    listMoviesController.handle(request, response).catch(next);
});

moviesRoutes.get("/:id", authMiddleware, (request: Request, response: Response, next: NextFunction) => {
    listMovieController.handle(request, response).catch(next);
});

moviesRoutes.patch("/:id", authMiddleware, (request: Request, response: Response, next: NextFunction) => {
    updateMovieController.handle(request, response).catch(next);
});


export { moviesRoutes };
