import { CreateMovieController } from "@/modules/movies/useCases/createMovie/CreateMovieController";
import { Router } from "express";

const moviesRoutes = Router();

const createMovieController = new CreateMovieController();

moviesRoutes.post("/movies", createMovieController.handle);

export { moviesRoutes }; 
