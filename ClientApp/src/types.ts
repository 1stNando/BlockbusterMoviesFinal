// This defines a TypeScript type to specify the structure of the data we receive from the API.

export type APIError = {
  errors: Record<string, string[]>
  status: number
  title: string
  traceId: string
  type: string
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
  user: {
    id: number
    fullName: string
    email: string
  }
}

export type NewReviewType = {
  id: number | undefined
  body: string
  stars: number
  createdAt: Date
  movieClassId: number
}

export type NewUserType = {
  fullName: string
  email: string
  password: string
}

export type LoginUserType = {
  email: string
  password: string
}

export type LoggedInUser = {
  id: number
  fullName: string
  email: string
}

export type LoginSuccess = {
  token: string
  user: LoggedInUser
}
