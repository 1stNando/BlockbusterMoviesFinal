import React from 'react'
import { Link } from 'react-router-dom'

// type SingleMovieFromListProps = {
//   movie: MovieClassType
// }

// This page is between the MAIN landing page and the detail specific "Movie" single view page.
export function SingleMovieFromList() {
  return (
    <>
      <ul>
        <div className="list-item">
          {/* <li key={movie.id}>
            <h2>Title: {movie.title}</h2>
          </li> */}
        </div>
      </ul>
      <div className="container is-mobile is-centered">
        <div>
          <a className="navbar-item is-active has-text-white">Home</a>
          <Link to="*">Click to go back HOME</Link>
        </div>
        <div className="column">
          <div className="box p-6 px-10-desktop py-12-desktop has-background-warning has-text-centered">
            <div className="is-relative mb-6"></div>
            {/* spacer */}
          </div>
        </div>
      </div>
    </>
  )
}
