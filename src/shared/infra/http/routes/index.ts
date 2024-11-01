import { Router } from "express";

import { moviesRoutes } from "./movies.routes";
import { reviewsRoutes } from "./reviews.routes";

const router = Router();

router.use("/movies", moviesRoutes);
router.use("/reviews", reviewsRoutes)

export { router };
