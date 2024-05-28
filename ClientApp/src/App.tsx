import React from 'react'
import { useQuery } from 'react-query'

import BBVLogo from './images/BBVLogo.png'
import { SignUp } from './pages/SignUp'
import { MovieClassType, MovieType } from './types'
import { Link } from 'react-router-dom'
import { SingleMovieFromList } from './components/SingleMovieFromList'
// import { SingleMovieFromList } from './components/SingleMovieFromList'

export function App() {
  // const [movies, setMovies] = useState([])

  //NOTE: In this code const { data: restaurants = [] } = we are destructuring the return of react-query to get the data property and renaming it restaurants. This will fetch the list of movies.
  const { data: movies = [] } = useQuery<MovieType[]>(
    ['movies'],
    async function () {
      const response = await fetch('/api/movies')

      // this returns the promise
      return response.json()
    }
  )

  console.log({ movies })

  const { data: movieClasses = [] } = useQuery<MovieClassType[]>(
    ['movieClasses'],
    async function () {
      const response = await fetch('/api/movieClasses')

      return response.json()
    }
  )
  //const [movieClasses, setMovieClasses] = useState([])

  return (
    <>
      <section className="hero is-small">
        <div className="hero-head">
          <div className="hero-body has-background-warning">
            <div className="container">
              <h1 className="is-size-2 has-text-link">Welcome!</h1>
              <img className="BBVLogo2" src={BBVLogo} alt="BBVLogo" />
            </div>

            <b className="is-size-4">Bulma Container overview</b>

            <div className="container">
              <div>
                <p>
                  The container width will be full below screen size of 1024px
                </p>

                <h3>GeeksforGeeks!!!!</h3>
              </div>
            </div>
          </div>
          <div className="hero-foot">Footer of the hero section!!!</div>
        </div>
      </section>

      {/* Creation of a navbar */}
      <section className="hero is-link is-medium">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img className="BBVLogo" src={BBVLogo} alt="BBVLogo" />
                </a>
                <span className="navbar-burger">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active has-text-white">Home</a>
                  <a className="navbar-item has-text-white">Examples</a>
                  <a className="navbar-item has-text-white">Documentation</a>

                  <Link className="navbar-item has-text-white" to="/new">
                    ADD A MOVIE
                  </Link>
                  <span className="navbar-item">
                    <a className="button is-primary is-inverted">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>Download</span>
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* //end of navbar Top part/////////////////////////////////////////////////////////// */}

        <div className="container is-mobile is-centered">
          <div className="column is-5">
            <div className="list">
              <div className="list-item">1 one</div>
              <div className="list-item">
                <p>Dynamic render: </p>

                {/* {movieFetchContent} */}
                {/* Dynamically render list instead! */}
                {/* <ul>
                  {movies.map(function (movie) {
                    return (
                      <li key={movie.id}>
                        <h2>{movie.name}</h2>
                      </li>
                    )
                  })}
                </ul> */}
                <ul>
                  {movies.map(function (movie) {
                    return <SingleMovieFromList key={movie.id} movie={movie} />
                  })}
                </ul>
              </div>
              <div className="list-item">2 two</div>
            </div>
          </div>
        </div>

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

        {/* //Middle section */}
        <SignUp />

        <div className="container">
          <div>
            <h1 className="title has-text-centered ">
              Results of Movies in our database
            </h1>
          </div>

          <div className="columns is-mobile is-centered">
            <div className="column is-5">
              <div className="list">
                <ul>
                  <div className="list-item">
                    <li>
                      <h2>Dune: Part 2</h2>
                      <p>
                        <span
                          className="stars"
                          aria-label="Star rating of this movie is 4.7 out of 5."
                        >
                          Rating: 4.7 out of 5.
                        </span>
                        (2,188)
                      </p>
                    </li>
                  </div>
                  <div className="list-item">
                    <li>
                      <h2>Dune: Part 1</h2>
                      <p>
                        <span
                          className="stars"
                          aria-label="Star rating of this movie is 4.8 out of 5."
                        >
                          Rating: 4.8 out of 5.
                        </span>
                        (3,211)
                      </p>
                    </li>
                  </div>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Table of Football teams example */}
        <div className="columns is-centered ">
          <div className="column is-6">
            <div className="container is-mobile is-centered">
              <table className="table ">
                <thead>
                  <tr>
                    <th>
                      <abbr title="Id">Id</abbr>
                    </th>
                    <th>Movie</th>
                    <th>
                      <abbr title="director">Director</abbr>
                    </th>
                    <th>
                      <abbr title="genre">Genre</abbr>
                    </th>
                    <th>
                      <abbr title="name">Name</abbr>
                    </th>
                    <th>
                      <abbr title="releaseDate">Release date</abbr>
                    </th>
                  </tr>
                </thead>
                <tfoot>
                  <tr>
                    <th>
                      <abbr title="id">Id</abbr>
                    </th>
                    <th>Movie</th>
                    <th>
                      <abbr title="genre">Genre</abbr>
                    </th>
                    <th>
                      <abbr title="Won">W</abbr>
                    </th>
                    <th>
                      <abbr title="Draw">D</abbr>
                    </th>
                    <th>
                      <abbr title="Lost">L</abbr>
                    </th>
                  </tr>
                </tfoot>
                <tbody>
                  <tr>
                    <th>1</th>
                    <td>
                      <a
                        href="https://en.wikipedia.org/wiki/Leicester_City_F.C."
                        title="Leicester City F.C."
                      >
                        Leicester City F.C.
                      </a>{' '}
                      <strong>(C)</strong>
                    </td>
                    <td>38</td>
                    <td>23</td>
                    <td>12</td>
                    <td>3</td>
                  </tr>
                  <tr className="is-warning">
                    <th>2</th>
                    <td>
                      <a href="">Arsenal</a>
                    </td>
                    <td>38</td>
                    <td>23</td>
                    <td>12</td>
                    <td>3</td>
                  </tr>
                </tbody>
              </table>
            </div>
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
                  <a>Modifiers</a>
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
                    className="BulmaLogo"
                    src="https://bulma.io/assets/images/bulma-type-white.png"
                    alt="Logo"
                  />
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </>
  )
}
