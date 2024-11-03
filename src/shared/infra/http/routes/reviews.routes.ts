import { CreateReviewController } from "@/modules/reviews/useCases/createReview/CreateReviewController";
import { DeleteReviewController } from "@/modules/reviews/useCases/deleteReview/DeleteReviewController";
import { UpdateReviewController } from "@/modules/reviews/useCases/updateReview/UpdateReviewController";
import { NextFunction, Request, Response, Router } from "express";
import { authMiddleware } from "../middlewares/auth";

const reviewsRoutes = Router();

const createReviewController = new CreateReviewController();
const deleteReviewController = new DeleteReviewController();
const updateReviewController = new UpdateReviewController();

reviewsRoutes.post("/:userId/:movieId", authMiddleware, (request: Request, response: Response, next: NextFunction) => {
    createReviewController.handle(request, response).catch(next);
});

reviewsRoutes.delete("/:reviewId", authMiddleware, (request: Request, response: Response, next: NextFunction) => {
    deleteReviewController.handle(request, response).catch(next);
});

reviewsRoutes.patch("/:reviewId", authMiddleware, (request: Request, response: Response, next: NextFunction) => {
    updateReviewController.handle(request, response).catch(next);
});


export { reviewsRoutes };

