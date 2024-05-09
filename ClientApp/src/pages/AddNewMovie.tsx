import React, { useState } from 'react'
import { MovieType } from '../types'
import { useMutation } from 'react-query'
//import { useNavigate } from 'react-router-dom'

export function NewMovie() {
  //const history = useNavigate()
  //const [errorMessage, setErrorMessage] = useState('')

  // This allows the form for a new movie to be interpreted from the user input.
  const [newMovie, setNewMovie] = useState<MovieType>({
    id: undefined,
    director: '',
    genre: '',
    name: '',
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
  async function submitNewMovie(movieToCreate: MovieType) {
    const response = await fetch('/api/Movies', {
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
  const createNewMovie = useMutation(submitNewMovie)
  // const createNewMovie = useMutation(submitNewMovie, {
  //   onSuccess: function () {
  //     history('/')
  //   },
  //   onError: function (apiError: APIError) {
  //     const newMessage = Object.values(apiError.errors).join(' ')

  //     setErrorMessage(newMessage)
  //   },
  // })

  async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
    // Easy to forget, but important to have this preventDefault() for the form to submit properly to the api function.
    event.preventDefault()

    createNewMovie.mutate(newMovie)
  }

  return (
    <>
      <div className="container">
        <p>Hello!</p>
        <div className="column is-half">
          <div className="box p-6 px-10-desktop py-12-desktop has-background-warning has-text-centered">
            <div className="is-relative mb-6">
              <form onSubmit={handleFormSubmit}>
                <h1 className="title is-4 mt-4 mb-1">
                  Add a new movie to the database
                </h1>
                <div className="is-relative mb-6">
                  <p className="form-input">
                    <label htmlFor="director">
                      <h1 className="title">Director</h1>
                    </label>
                    <input
                      className="input py-6 has-background-link has-text-warning is-size-3"
                      type="text"
                      name="director"
                      value={newMovie.director}
                      onChange={handleStringFieldChange}
                    />
                  </p>
                </div>

                <p className="form-input">
                  <label htmlFor="genre">
                    <h1 className="title">Genre</h1>
                  </label>
                  <input
                    className="input py-6 has-background-link has-text-warning is-size-3"
                    name="genre"
                    value={newMovie.genre}
                    onChange={handleStringFieldChange}
                  ></input>
                </p>
                <p className="form-input">
                  <label htmlFor="name">
                    <h1 className="title">Name</h1>
                  </label>
                  <input
                    className="input py-6 has-background-link has-text-warning is-size-3"
                    type="text"
                    name="name"
                    value={newMovie.name}
                    onChange={handleStringFieldChange}
                  />
                </p>
                <p className="form-input">
                  <label htmlFor="releaseDate">
                    <h1 className="title">Release Date</h1>
                  </label>
                  <input
                    className="input py-6 has-background-link has-text-warning is-size-3"
                    type="text"
                    name="releaseDate"
                    value={newMovie.releaseDate}
                    onChange={handleStringFieldChange}
                  />
                </p>
                <p>
                  <input
                    className="button mt-5 py-7 has-background-link has-text-warning is-size-4"
                    type="submit"
                    value="Submit"
                  />
                </p>
              </form>
            </div>

            {/* spacer */}
            <form action="#">
              <h1 className="title is-4 mt-4 mb-1">
                Add a new movie to the database
              </h1>

              <div className="is-relative mb-6 ">
                <input
                  className="input py-6 has-background-link has-text-warning is-size-3"
                  type="name"
                  placeholder="Movie Title"
                />
                <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                  Name
                </span>
              </div>

              <div className="is-relative mb-6 ">
                <input
                  className="input py-6 has-background-link has-text-warning is-size-3"
                  type="Director"
                  placeholder="S. Spielberg"
                />
                <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                  Director Name
                </span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}
