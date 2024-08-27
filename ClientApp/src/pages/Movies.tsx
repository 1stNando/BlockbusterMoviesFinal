import React, { useState } from 'react'

import BBVLogo from '../images/BBVLogo.png'
import { Link } from 'react-router-dom'
import { useQuery } from 'react-query'
import { MovieClassType } from '../types'
import { getUser, isLoggedIn, logout } from '../auth'

export function Movies() {
  const user = getUser()

  function handleLogout() {
    logout()

    window.location.assign('/')
  }

  // In this code const { data: movies2 = [] } = we are destructuring the return of react-query to get the data property and renaming it movies2. This will fetch the list of movies. Using react-query library to integrate with our backend API.

  const { data: movies2 = [] } = useQuery<MovieClassType[]>(
    ['movies2'],
    async function () {
      const response = await fetch('/api/movieclasses')
      return response.json()
    }
  )

  // State for the search text
  const [searchText, setSearchText] = useState('')

  // Function to filter movies based on search text input from user.
  const filteredMovies2 = movies2.filter(
    (movie) =>
      movie.title.toLowerCase().includes(searchText.toLowerCase()) ||
      movie.director.toLowerCase().includes(searchText.toLowerCase()) ||
      movie.genre.toLowerCase().includes(searchText.toLowerCase()) ||
      movie.releaseDate.toLowerCase().includes(searchText.toLowerCase())
  )

  return (
    <>
      <section className="hero is-small">
        <div className="hero-head">
          <div className="hero-body has-background-warning">
            <div className="container ml-0">
              <img className="BBVLogo2" src={BBVLogo} alt="BBVLogo" />
            </div>

            <div className="container ml-0">
              <div className="has-text-white">
                <h1>
                  This website has been created to store the favorite movies of
                  users.
                </h1>
              </div>
            </div>
          </div>
          <div className="hero-foot ml-5">
            {isLoggedIn() ? <p>Welcome back, {user.fullName}!</p> : null} Add
            your favorite movie to our database!
          </div>
        </div>
      </section>

      {/* Creation of a navbar */}
      <section className="hero is-link is-medium">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <Link className="navbar-item has-text-white" to="*">
                    Home
                  </Link>

                  {isLoggedIn() ? null : (
                    <Link className="navbar-item has-text-white" to="/signin">
                      Sign In
                    </Link>
                  )}

                  {isLoggedIn() ? null : (
                    <Link className="navbar-item has-text-white" to="/signup">
                      {' '}
                      Sign Up
                    </Link>
                  )}

                  <Link className="navbar-item has-text-white" to="/new">
                    ADD A MOVIE
                  </Link>

                  {isLoggedIn() ? (
                    <span className="navbar-item">
                      <a
                        href="/"
                        className="button is-primary is-inverted"
                        onClick={function (event) {
                          event.preventDefault()
                          handleLogout()
                        }}
                      >
                        <span className="icon">
                          <i className="fab fa-github"></i>
                        </span>
                        <span>Log Out</span>
                      </a>
                    </span>
                  ) : null}

                  <span className="navbar-item">
                    {/* Search input for table */}
                    <form className="search">
                      <input
                        type="text"
                        placeholder="Search database..."
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                      />
                    </form>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* //end of navbar Top part/////////////////////////////////////////////////////////// */}
        <div className="container">
          <section className="section">
            <div>
              <h1 className="title has-text-centered ">
                Results of Movies in our database{' '}
                <i className="fa-brands fa-font-awesome"></i>
              </h1>
            </div>
            <div className="container">
              {/* Table  */}
              <div className="columns is-centered ">
                <div className="column is-7">
                  <div className="container is-mobile is-centered">
                    <table className="table">
                      <thead>
                        <tr>
                          <th>
                            <abbr title="Movie">Movie</abbr>
                          </th>
                          <th>
                            <abbr title="Title">Title</abbr>
                          </th>
                          <th>
                            <abbr title="Director">Director</abbr>
                          </th>
                          <th>
                            <abbr title="Genre">Genre</abbr>
                          </th>

                          <th>
                            <abbr title="Release Date">Release Date</abbr>
                          </th>

                          <th>
                            <abbr title="Reviews">Reviews</abbr>
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        {filteredMovies2.map((movie, index) => (
                          <tr
                            key={index}
                            className={index % 2 === 1 ? 'is-warning' : ''}
                          >
                            <td>
                              <strong>{movie.id}</strong>
                            </td>
                            <td>
                              <Link to={`/movieclasses/${movie.id}`}>
                                {movie.title}
                              </Link>
                            </td>
                            <td>{movie.director}</td>
                            <td>{movie.genre}</td>
                            <td>{movie.releaseDate}</td>
                            <td>{movie.reviews.length}</td>
                          </tr>
                        ))}
                      </tbody>
                      <tfoot>
                        <tr>
                          <th>Movie</th>
                          <th>
                            <abbr title="Director">Title</abbr>
                          </th>
                          <th>
                            <abbr title="Title">Director</abbr>
                          </th>
                          <th>
                            <abbr title="Genre">Genre</abbr>
                          </th>

                          <th>
                            <abbr title="Release Date">Release Date</abbr>
                          </th>

                          <th>
                            <abbr title="Reviews">Reviews</abbr>
                          </th>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ///////////////////////////////////////////////////////////////// */}

        {/* Hero content: will be in the middle */}
        <div className="hero-body mb-0 py-5">
          <div className="container has-text-centered">
            <p className="title is-size-3">Please Join!</p>
            <p className="subtitle">
              Subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Earum maiores possimus quia recusandae.
            </p>
          </div>
        </div>

        {/* Footer: will stick at the bottom */}
        <div className="hero-footer ">
          <nav className="tabs">
            <div className="column is-three-fifths is-offset-one-fifth">
              <ul className="is-center">
                <li className="is-active is-background-warning">
                  <a>Overview</a>
                </li>
                <li>
                  <a>
                    Github{' '}
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <a>Grid</a>
                </li>
                <li>
                  <a>Elements</a>
                </li>
                <li>
                  Made with
                  <img
                    className="BulmaLogo ml-2"
                    src="https://bulma.io/assets/images/bulma-type-white.png"
                    alt="Logo"
                  />
                  .io
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}
