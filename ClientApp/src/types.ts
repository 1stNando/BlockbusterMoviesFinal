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
}
