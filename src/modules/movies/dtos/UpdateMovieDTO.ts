export interface UpdateMovieDTO {
    title: string
    description: string
    genre: string
    releaseYear: number
    duration: number
}

export interface UpdateMovie {
    title: string
    description: string
    genre: string
    releaseYear: number
    duration: number
    updatedAt: Date
}