import { Router } from "express";

import { moviesRoutes } from "./movies.routes";

const router = Router();

router.use("/movies", moviesRoutes);

export { router };
