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
              <img className="BBVLogo2" src={BBVLogo} alt="BBVLogo" />
            </div>

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
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* ///////////////////////////////////////////////////////////////// */}
        <div className="container"></div>
        <div className="columns is-mobile is-centered">
          <div className="column is-5">
            <div className="list">
              {movies.map(function (movie) {
                return <SingleMovieFromList key={movie.id} movie={movie} />
              })}
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
                    <th>
                      <abbr title="Movie">Movie</abbr>
                    </th>
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

      {/* Part for the middle section */}
      <section className="hero has-background-warning is-small">
        <div className="hero-body">
          <div className="container">
            <h1 className="title">Hero 2.0 Title</h1>
            <h2 className="subtitle">
              Hero Subtitle Lorem ipsum dolor sit amet consectetur adipisicing
              elit.
            </h2>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {/* !Content inside container */}
          <h1 className="title">Section Title</h1>
          <p>This content is centered and has a maximum width.</p>
        </div>
        {/* 3. Columns

        Columns are part of Bulma's grid system
        and are used to create responsive, 
        multi-column layouts. They automatically 
        stack vertically on smaller screens.

            Usage: Use columns inside sections or containers to 
            organize content into multiple columns. */}
        <div className="container">
          <div className="columns">
            <div className="column">
              <div className="box">Column 1</div>
            </div>
            <div className="column">
              <div className="box">Column 2</div>
            </div>
            <div className="column">
              <div className="box">Column3</div>
            </div>
          </div>
        </div>
        {/* 5. Level The Level component is a simple, horizontal flexbox container
        for aligning items side-by-side. It's particularly useful for small,
        evenly spaced horizontal content. 
        Usage: Use the level component for 
        content that needs to be distributed horizontally, 
        like statistics or controls. */}
        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Tweets</p>
              <p className="title">3,456</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Following</p>
              <p className="title">123</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Followers</p>
              <p className="title">456k</p>
            </div>
          </div>
        </nav>
        {/* 6. Tile The Tile component is a powerful grid system for creating
        complex layouts with nested columns and rows. Usage: Use tiles for more
        complex layouts where you need to nest multiple levels of columns and
        rows. */}
        <div className="tile is-ancestor">
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Tile 1</p>
              <p className="subtitle">Subtitle</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Tile 2</p>
              <p className="subtitle">Subtitle</p>
            </article>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Tile 3</p>
              <p className="subtitle">Subtitle</p>
            </article>
          </div>
        </div>
        {/* Nested Tiles */}
        <div className="tile is-ancestor">
          <div className="tile is-vertical is-8">
            <div className="tile">
              <div className="tile is-parent is-vertical">
                <article className="tile is-child box">
                  <p className="title">Tile 1</p>
                  <p className="subtitle">Subtitle</p>
                </article>
                <article className="tile is-child box">
                  <p className="title">Tile 2</p>
                  <p className="subtitle">Subtitle</p>
                </article>
              </div>
              <div className="tile is-parent">
                <article className="tile is-child box">
                  <p className="title">Tile 3</p>
                  <p className="subtitle">Subtitle</p>
                </article>
              </div>
            </div>
            <div className="tile is-parent">
              <article className="tile is-child box">
                <p className="title">Tile 4</p>
                <p className="subtitle">Subtitle</p>
              </article>
            </div>
          </div>
          <div className="tile is-parent">
            <article className="tile is-child box">
              <p className="title">Tile 5</p>
              <p className="subtitle">Subtitle</p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
