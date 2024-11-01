import { CreateMovieController } from "@/modules/movies/useCases/createMovie/CreateMovieController";
import { DeleteMovieController } from "@/modules/movies/useCases/deleteMovie/DeleteMovieController";
import { ListMovieController } from "@/modules/movies/useCases/listMovie/ListMovieController";
import { ListMoviesController } from "@/modules/movies/useCases/listMovies/ListMoviesController";
import { UpdateMovieController } from "@/modules/movies/useCases/updateMovie/UpdateMovieController";
import { Router, Request, Response, NextFunction } from "express";

const moviesRoutes = Router();

const createMovieController = new CreateMovieController();
const deleteMovieController = new DeleteMovieController();
const listMoviesController = new ListMoviesController();
const listMovieController = new ListMovieController();
const updateMovieController = new UpdateMovieController();

moviesRoutes.post("/", (request: Request, response: Response, next: NextFunction) => {
    createMovieController.handle(request, response).catch(next);
});

moviesRoutes.delete("/:id", (request: Request, response: Response, next: NextFunction) => {
    deleteMovieController.handle(request, response).catch(next);
});

moviesRoutes.get("/", (request: Request, response: Response, next: NextFunction) => {
    listMoviesController.handle(request, response).catch(next);
});

moviesRoutes.get("/:id", (request: Request, response: Response, next: NextFunction) => {
    listMovieController.handle(request, response).catch(next);
});

moviesRoutes.patch("/:id", (request: Request, response: Response, next: NextFunction) => {
    updateMovieController.handle(request, response).catch(next);
});


export { moviesRoutes };
