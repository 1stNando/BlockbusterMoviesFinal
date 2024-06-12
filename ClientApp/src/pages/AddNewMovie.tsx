import React, { useState } from 'react'
import { APIError, MovieClassType } from '../types'
import { useMutation } from 'react-query'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export function NewMovie() {
  // This is the id used to fetch the data for one Movie
  //const { id } = useParams<{ id: string }>()

  const history = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')

  // This allows the form for a new movie to be interpreted from the user input.
  const [newMovie, setNewMovie] = useState<MovieClassType>({
    id: undefined,
    director: '',
    genre: '',
    title: '',
    releaseDate: '',
  })

  // Special function that makes our form submission dynamic
  function handleStringFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    // IF YOU NEED TO input a number value in the form, simply make a copy of this function and wrap the value in a number. Like this: const value = Number(event.target.value)
    const value = event.target.value
    const fieldName = event.target.name

    //spread operator... is used to integrate the new movie form submit to match the newMovie
    const updateMovie = { ...newMovie, [fieldName]: value }

    setNewMovie(updateMovie)
  }

  // POST create a new movie API
  async function submitNewMovie(movieToCreate: MovieClassType) {
    const response = await fetch('/api/movieclasses', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(movieToCreate),
    })

    if (response.ok) {
      return response.json()
    } else {
      throw await response.json()
    }
  }

  // React-query's mutation to send a POST request to add a Movie.
  //const createNewMovie = useMutation(submitNewMovie)
  const createNewMovie = useMutation(submitNewMovie, {
    onSuccess: function () {
      history('/')
    },
    onError: function (apiError: APIError) {
      setErrorMessage(Object.values(apiError.errors).join(' '))
    },
  })

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Easy to forget, but important to have this preventDefault() for the form to submit properly to the api function.
    event.preventDefault()

    // Date validation, this check is added to ensure the date is not in the future.
    const currentDate = new Date().toISOString().split('T')[0]
    if (newMovie.releaseDate > currentDate) {
      setErrorMessage('The release date cannot be in the future.')
      return
    }

    createNewMovie.mutate(newMovie)
  }

  return (
    <>
      <div className="container is-mobile is-centered">
        <div className="column is-5">
          <div id="navbarMenuHeroA" className="navbar-menu">
            <div className="navbar-end">
              <div>
                <a className="navbar-item is-active has-text-white">Home</a>
                <Link to="*">Click to go back HOME</Link>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="box p-6 px-10-desktop py-12-desktop has-background-warning has-text-centered">
              <div className="is-relative mb-6">
                <form onSubmit={handleFormSubmit}>
                  {errorMessage ? (
                    <p className="form-error is-warning">{errorMessage}</p>
                  ) : null}
                  <h1 className="title is-4 mt-4 mb-1">
                    Add a new movie to the database
                  </h1>
                  <div className="is-relative">
                    <div className="form-input">
                      <label htmlFor="director">
                        <div className="title">Director</div>
                      </label>
                      <input
                        className="input py-6 has-background-link has-text-warning is-size-3"
                        type="text"
                        name="director"
                        value={newMovie.director}
                        onChange={handleStringFieldChange}
                      />
                    </div>
                  </div>

                  <div className="form-input">
                    <label htmlFor="genre">
                      <div className="title">Genre</div>
                    </label>
                    <input
                      className="input py-6 has-background-link has-text-warning is-size-3"
                      type="text"
                      name="genre"
                      value={newMovie.genre}
                      onChange={handleStringFieldChange}
                    />
                  </div>
                  <div className="is-relative">
                    <div className="form-input">
                      <label htmlFor="title">
                        <div className="title">Title</div>
                      </label>
                      <input
                        className="input py-6 has-background-link has-text-warning is-size-3"
                        type="text"
                        name="title"
                        value={newMovie.title}
                        onChange={handleStringFieldChange}
                      />
                    </div>
                  </div>
                  <div className="form-input">
                    <label htmlFor="releaseDate">
                      <div className="title">
                        Release Date (4digitYear-month-day)
                      </div>
                    </label>
                    <input
                      className="input py-6 has-background-link has-text-warning is-size-3"
                      type="date"
                      name="releaseDate"
                      value={newMovie.releaseDate}
                      onChange={handleStringFieldChange}
                    />
                  </div>
                  {/* Submit button */}
                  <div>
                    <input
                      className="button mt-5 py-7 has-background-link has-text-warning is-size-4"
                      type="submit"
                      value="Submit"
                    />
                  </div>
                </form>
              </div>
              {/* spacer */}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
