import React from 'react'
import { MovieType } from '../types'

type SingleMovieFromListProps = {
  movie: MovieType
}

// This page is like an intermediary between the MAIN landing page and the detail specific "Movie" single view page.
export function SingleMovieFromList(props: SingleMovieFromListProps) {
  return (
    <ul>
      <div className="list-item">
        <li key={props.movie.id}>
          <h2>Title: {props.movie.name}</h2>
        </li>
      </div>
    </ul>
  )
}
