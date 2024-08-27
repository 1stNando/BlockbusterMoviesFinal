import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { APIError, NewUserType } from '../types'
import { useMutation } from 'react-query'

export function SignUp() {
  const [errorMessage, setErrorMessage] = useState('')

  const [newUser, setNewUser] = useState<NewUserType>({
    fullName: '',
    email: '',
    password: '',
  })

  const history = useNavigate()

  function handleStringFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const value = event.target.value
    const fieldName = event.target.name

    const updateUser = { ...newUser, [fieldName]: value }

    setNewUser(updateUser)
  }

  async function submitNewUser(newUser: NewUserType) {
    const response = await fetch('/api/Users', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(newUser),
    })

    if (response.ok) {
      return response.json()
    } else {
      throw await response.json()
    }
  }

  const createUserMutation = useMutation(
    (newUser: NewUserType) => submitNewUser(newUser),
    {
      onSuccess: function () {
        history('/')
      },
      onError: function (error: APIError) {
        setErrorMessage(Object.values(error.errors).join('. '))
      },
    }
  )

  return (
    <>
      <div className="column is-half is-offset-one-quarter">
        <div>
          <a className="navbar-item is-active has-text-primary">Home</a>
          <Link to="*">Click to go back HOME</Link>
        </div>
        <div className="box p-6 px-10-desktop py-12-desktop has-background-warning has-text-centered">
          <form
            onSubmit={(event) => {
              event.preventDefault()

              createUserMutation.mutate(newUser)
            }}
          >
            {errorMessage ? <p className="form-error">{errorMessage}</p> : null}

            <span className="has-text-link has-text-weight-semibold is-size-4">
              Sign Up To Join
            </span>

            <h3 className="title is-4 mt-4 mb-1">Create new account</h3>

            <div className="form-input is-relative mb-6 ">
              <input
                className="input py-6 has-background-link has-text-warning is-size-3"
                type="name"
                name="fullName"
                value={newUser.fullName}
                onChange={handleStringFieldChange}
                placeholder="John Doe"
              />
              <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                Full name
              </span>
            </div>

            <div className="form-input is-relative mb-6 ">
              <input
                className="input py-6 has-background-link has-text-warning is-size-3"
                type="email"
                name="email"
                value={newUser.email}
                onChange={handleStringFieldChange}
                placeholder="i.e. jDoe@hotmail.com"
              />
              <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                Your email address
              </span>
            </div>

            <div className="form-input is-relative mb-6">
              <input
                className="input py-6 has-background-link has-text-warning is-size-3"
                type="password"
                name="password"
                value={newUser.password}
                onChange={handleStringFieldChange}
                placeholder="*****"
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
    </>
  )
}
