export interface CreateReviewDTO {
    rating: number;
    comment?: string;
    userId: string;
    movieId: string;
}
