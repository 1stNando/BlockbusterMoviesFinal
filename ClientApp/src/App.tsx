import React from 'react'

export function App() {
  return (
    <body>
      <section className="hero">
        <div className="hero-head">
          <div className="hero-body">
            <h1 className="is-size-2 has-text-success">GeeksforGeeks</h1>

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
          <div className="hero-foot">Footer!!!</div>
        </div>
      </section>

      {/* Creation of a navbar */}
      <section className="hero is-primary is-medium">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item">
                  <img
                    src="https://bulma.io/assets/images/bulma-type-white.png"
                    alt="Logo"
                  />
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
        {/* //end of navbar Top part */}

        {/* Hero content: will be in the middle */}
        <div className="hero-body">
          <div className="container has-text-centered">
            <p className="title">Title</p>
            <p className="subtitle">
              Subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Earum maiores possimus quia recusandae.
            </p>
          </div>
        </div>

        {/* Hero footer: will stick at the bottom */}
        <div className="hero-footer">
          <nav className="tabs">
            <div className="container">
              <ul>
                <li className="is-active">
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
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </body>
  )
}
