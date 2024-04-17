import React from 'react'

export function App() {
  return (
    <body>
      <section className="hero">
        <div className="hero-head">
          <div className="hero-body has-background-warning">
            <h1 className="is-size-2 has-text-link">GeeksforGeeks</h1>

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
      <section className="hero is-primary is-medium">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item has-text-warning">
                  Made with
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
        <div className="column is-half is-offset-one-quarter">
          <div className="box p-6 px-10-desktop py-12-desktop has-background-warning has-text-centered">
            <form action="#">
              <span className="has-text-link has-text-weight-semibold is-size-4">
                Sign Up To Join
              </span>
              <h3 className="title is-4 mt-4 mb-1">Create new account</h3>

              <div className="is-relative mb-6 ">
                <input
                  className="input py-6 has-background-link has-text-warning is-size-3"
                  type="name"
                  placeholder="John Doe"
                />
                <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                  Name
                </span>
              </div>

              <div className="is-relative mb-6 ">
                <input
                  className="input py-6 has-background-link has-text-warning is-size-3"
                  type="email"
                  placeholder="e.g hello@xyz.com"
                />
                <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                  Your email address
                </span>
              </div>

              <div className="is-relative mb-6">
                <input
                  className="input py-6 has-background-link has-text-warning is-size-3"
                  type="password"
                  placeholder="********"
                />
                <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                  Password
                </span>
              </div>
              {/* /////end of middle section */}

              <label className="is-flex mb-10">
                <input
                  className="mt-1"
                  type="checkbox"
                  name="terms"
                  value="1"
                />
                <span className="is-inline-block has-text-grey-dark">
                  By signing up, you agree to our{' '}
                  <a href="#">Terms, Data Policy</a>
                </span>
              </label>
            </form>
          </div>
        </div>

        {/* Hero footer: will stick at the bottom */}
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
              </ul>
            </div>
          </nav>
        </div>
      </section>
    </body>
  )
}
