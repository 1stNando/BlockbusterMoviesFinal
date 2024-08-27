import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { APIError, LoginSuccess, LoginUserType } from '../types'
import { useMutation } from 'react-query'
import { recordAuthentication } from '../auth'

async function loginUser(user: LoginUserType): Promise<LoginSuccess> {
  const response = await fetch('/api/Sessions', {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(user),
  })

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function SignIn() {
  const [errorMessage, setErrorMessage] = useState('')

  const [user, setUser] = useState<LoginUserType>({
    email: '',
    password: '',
  })

  function handleStringFieldChange(event: React.ChangeEvent<HTMLInputElement>) {
    const value = event.target.value
    const fieldName = event.target.name
    const updateUser = { ...user, [fieldName]: value }
    setUser(updateUser)
  }

  const loginUserMutation = useMutation(loginUser, {
    onSuccess: function (apiResponse) {
      // important implementation
      recordAuthentication(apiResponse)

      window.location.assign('/')
    },
    onError: function (error: APIError) {
      setErrorMessage(Object.values(error.errors).join(' '))
    },
  })

  return (
    <main>
      <div className="column is-half is-offset-one-quarter">
        <div>
          <a className="navbar-item is-active has-text-primary">Home</a>
          <Link to="*">Click to go back HOME</Link>
        </div>
        <div className="box p-6 px-10-desktop py-12-desktop has-background-warning has-text-centered">
          <form
            onSubmit={function (event) {
              event.preventDefault()

              loginUserMutation.mutate(user)
            }}
          >
            {errorMessage ? <p className="form-error">{errorMessage}</p> : null}

            <h3 className="title is-4 mt-4 mb-1">Sign In</h3>

            <div className="form-input is-relative mb-6 ">
              <input
                className="input py-6 has-background-link has-text-warning is-size-3"
                type="email"
                name="email"
                value={user.email}
                onChange={handleStringFieldChange}
                placeholder="i.e. jDoe@hotmail.com"
              />
              <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                Email
              </span>
            </div>

            <div className="form-input is-relative mb-6">
              <input
                className="input py-6 has-background-link has-text-warning is-size-3"
                type="password"
                name="password"
                value={user.password}
                onChange={handleStringFieldChange}
                placeholder="*****"
              />
              <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                Password
              </span>
            </div>
            {/* /////end of middle section */}

            <button className="button" type="submit" value="Submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
