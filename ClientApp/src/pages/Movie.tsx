import React from 'react'
//import BBVLogo from '.BBVLogo.png'
import { Link, useParams } from 'react-router-dom'
import { MovieClassType } from '../types'
import { useQuery } from 'react-query'

// Page representing one movie view. Uses the {id} to fetch corresponding data. http://localhost:5000/movieclasses/35

async function loadOneMovie(id: string | undefined) {
  const response = await fetch(`/api/movieclasses/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

// Represent the default value of our object when there is no data being returned from react query. Null object pattern rather than guard clause.
const NullMovie: MovieClassType = {
  id: undefined,
  title: '',
  genre: '',
  director: '',
  releaseDate: '',
}

export function Movie() {
  // React router needed to find id of movie.
  const { id } = useParams<{ id: string }>()

  const { data: movie = NullMovie } = useQuery<MovieClassType>(
    ['one-movie', id],
    () => loadOneMovie(id)
  )
  //Guard clause approach
  // if (movie === undefined) {
  //   return null
  // }

  return (
    <>
      <section className="hero is-small">
        <div className="hero-head">
          <div className="hero-body has-background-warning">
            <div className="container">
              {/* <img className="BBVLogo2" src={BBVLogo} alt="BBVLogo" /> */}
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
                {/* <a className="navbar-item">
                  <img className="BBVLogo" src={BBVLogo} alt="BBVLogo" />
                </a> */}
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item is-active has-text-white">Home</a>
                  <a className="navbar-item has-text-white">Examples</a>
                  <Link className="navbar-item has-text-white" to="/signup">
                    {' '}
                    Sign Up
                  </Link>
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
                  <span className="navbar-item">
                    {/* Search input for table */}
                    {/* <form className="search">
                      <input
                        type="text"
                        placeholder="Search database..."
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                      />
                    </form> */}
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
                    <p>Hello!!</p>
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

        {/* //Middle section */}
        {/* <SignUp /> */}

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
        <span>
          <br />
        </span>
        {/* 3. Columns

        Columns are part of Bulma's grid system
        and are used to create responsive, 
        multi-column layouts. They automatically 
        stack vertically on smaller screens.

            Usage: Use columns inside sections or containers to 
            organize content into multiple columns. */}
        <div className="container">
          <p className="title">Title of column </p>
          <div className="columns">
            <div className="column">
              <div className="box">Column 1</div>
            </div>
            <div className="column">
              <div className="box">Column 2</div>
            </div>
            <div className="column">
              <div className="box">Column3333</div>
            </div>
          </div>
        </div>
        <span>
          <br />
        </span>
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

        {/* Best practices for Nesting Layout Components */}
        <section className="hero is-info is-small">
          <div className="hero-body">
            <div className="container">
              <h1 className="title">Welcome to the Website</h1>
              <h2 className="subtitle">Your success is our priority</h2>
            </div>
          </div>
        </section>
        {/* 4. Level for Horizontal Content Distribution: Use the level component for simple horizontal alignment of items. */}
        <nav className="level">
          <div className="level-item has-text-centered">
            <p className="title">123</p>
            <p className="heading">Items</p>
          </div>
          <div className="level-item has-text-centered">
            <p className="title">456</p>
            <p className="heading">Followers</p>
          </div>
        </nav>
      </section>
      {/* End of hero section */}
      <section>
        <div className="container">
          <div>
            <h1>Hello world!</h1>
            <h1>{movie.title}</h1>
          </div>
        </div>
      </section>
    </>
  )
}
