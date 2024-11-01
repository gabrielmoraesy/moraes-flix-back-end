import { Router } from "express";

import { moviesRoutes } from "./movies.routes";
import { reviewsRoutes } from "./reviews.routes";
import { authRoutes } from "./auth.routes";

const router = Router();

router.use("/movies", moviesRoutes);
router.use("/reviews", reviewsRoutes)
router.use("/auth", authRoutes)

export { router };
