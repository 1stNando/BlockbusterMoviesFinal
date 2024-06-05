import React from 'react'
import { MovieClassType } from '../types'

type SingleMovieClassFromListProps = {
  movie: MovieClassType
}

// This page is like an intermediary between the MAIN landing page and the detail specific "Movie" single view page.
export function SingleMovieClassFromList(props: SingleMovieClassFromListProps) {
  return (
    <ul>
      <div className="list-item">
        <li key={props.movie.id}>
          <h2>Title: {props.movie.title}</h2>
        </li>
      </div>
    </ul>
  )
}
