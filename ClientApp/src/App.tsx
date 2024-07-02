import React from 'react'
import { Movies } from './pages/Movies'
import { Route, Routes } from 'react-router-dom'
// import { SingleMovieFromList } from './components/SingleMovieFromList'
// import { SingleMovieClassFromList } from './components/SingleMovieClassFromList'

export function App() {
  return (
    <>
      <Routes>
        <Route path="*" element={<Movies />} />
      </Routes>

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
          </div>
        </div>
      </section>
    </>
  )
}
