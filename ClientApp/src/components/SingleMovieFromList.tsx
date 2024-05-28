import React from 'react'
import { MovieType } from '../types'

type SingleMovieFromListProps = {
  movie: MovieType
}

// This page is like an intermediary between the MAIN landing page and the detail specific "Movie" single view page.
export function SingleMovieFromList(props: SingleMovieFromListProps) {
  return (
    <li key={props.movie.id}>
      <h2>Name of movie: {props.movie.name}</h2>
    </li>
  )
}
