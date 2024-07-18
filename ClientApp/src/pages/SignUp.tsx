import React from 'react'
import { Link } from 'react-router-dom'

export function SignUp() {
  return (
    <>
      <div className="column is-half is-offset-one-quarter">
        <div>
          <a className="navbar-item is-active has-text-primary">Home</a>
          <Link to="*">Click to go back HOME</Link>
        </div>
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
              <input className="mt-1" type="checkbox" name="terms" value="1" />
              <span className="is-inline-block has-text-grey-dark">
                By signing up, you agree to our{' '}
                <a href="#">Terms, Data Policy</a>
              </span>
            </label>

            <button className="button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
      {/* <div className="is-relative mb-6">
        <div className="field">
          <p className="control has-icons-left has-icons-right">
            <input className="input" type="email" placeholder="Email" />
            <span className="icon is-small is-left">
              <i className="fas fa-envelop"></i>
            </span>
            <span className="icon is-small is-right">
              <i className="fas fa-check"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control has-icons-left">
            <input type="password" className="input" placeholder="Password" />
            <span className="icon is-small is-left">
              <i className="fas fa-block"></i>
            </span>
          </p>
        </div>

        <div className="field">
          <p className="control">
            <button className="button is-success">Sign up</button>
          </p>
        </div>
      </div>
      <br /> */}
    </>
  )
}
