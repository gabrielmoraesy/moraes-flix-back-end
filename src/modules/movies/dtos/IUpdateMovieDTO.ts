export interface IUpdateMovieDTO {
    title: string
    description: string
    genre: string
    releaseYear: number
    duration: number
}

export interface IUpdateMovie {
    title: string
    description: string
    genre: string
    releaseYear: number
    duration: number
    updatedAt: Date
}