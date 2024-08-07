// This defines a TypeScript type to specify the structure of the data we receive from the API.

export type APIError = {
  errors: Record<string, string[]>
  status: number
  title: string
  traceId: string
  type: string
}

export type MovieType = {
  id?: number | undefined
  director: string
  genre: string
  name: string
  releaseDate: string
}

export type MovieClassType = {
  id?: number | undefined
  title: string
  genre: string
  director: string
  releaseDate: string

  reviews: ReviewType[]
}

export type ReviewType = {
  id?: number
  body: string
  stars: number
  createdAt?: string
  movieClassId: number
}

// type for submitting new review
export type NewReviewType = {
  id: number | undefined
  body: string
  stars: number
  createdAt: Date
  movieId: number
}

export type NewUserType = {
  fullName: string
  email: string
  password: string
}
