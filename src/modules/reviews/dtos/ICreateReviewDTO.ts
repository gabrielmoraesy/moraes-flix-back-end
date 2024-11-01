export interface ICreateReviewDTO {
    rating: number;
    comment?: string;
    userId: string;
    movieId: string;
}
