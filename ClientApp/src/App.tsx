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
          <h1>This content is centered and has a maximum width.</h1>
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
          <h1 className="title">Title of column </h1>
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
              <h1 className="heading">Tweets</h1>
              <h1 className="title">3,456</h1>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <h1 className="heading">Following</h1>
              <h1 className="title">123</h1>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <h1 className="heading">Followers</h1>
              <h1 className="title">456k</h1>
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
              <h1 className="title">Tile 1</h1>
              <h1 className="subtitle">Subtitle</h1>
            </article>
          </div>
          <div className="tile is-h1arent">
            <article className="tile is-child box">
              <h1 className="title">Tile 2</h1>
              <h1 className="subtitle">Subtitle</h1>
            </article>
          </div>
          <div className="tile is-h1arent">
            <article className="tile is-child box">
              <h1 className="title">Tile 3</h1>
              <h1 className="subtitle">Subtitle</h1>
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
            <h1 className="title">123</h1>
            <h1 className="heading">Items</h1>
          </div>
          <div className="level-item has-text-centered">
            <h1 className="title">456</h1>
            <h1 className="heading">Followers</h1>
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
