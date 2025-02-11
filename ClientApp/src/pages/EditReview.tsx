import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { APIError, EditReviewType, NewReviewType } from '../types'
import { authHeader } from '../auth'

async function loadOneReview(id: string | undefined) {
  const response = await fetch(`/api/reviews/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

async function submitUpdatedReview(review: NewReviewType) {
  const response = await fetch(`/api/reviews/${review.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: authHeader(),
    },
    body: JSON.stringify(review),
  })

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function EditReview() {
  const { id } = useParams<{ id: string }>()
  const history = useNavigate()
  const [errorMessage, setErrorMesage] = useState('')

  // Initial state for review data
  const [updatingReview, setUpdatingReview] = useState<NewReviewType>({
    id: undefined,
    body: '',
    stars: 5,
    createdAt: new Date(),
    movieClassId: 0,
  })

  // Fetch review data
  const { data: reviewData, error } = useQuery<NewReviewType>(
    ['one-review', id],
    () => loadOneReview(id),
    {
      onSuccess: (review) => {
        setUpdatingReview(review)
      },
    }
  )

  function handleFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target
    setUpdatingReview((prevReview) => ({
      ...prevReview,
      [name]: value,
    }))
  }

  // Mutation for updating review
  const updateReview = useMutation(submitUpdatedReview, {
    onSuccess: () => {
      // After the review is updated, redirect to movie page
      history(`/movieclasses/${updatingReview.movieClassId}`)
    },
    onError: (error: APIError) => {
      setErrorMessage(Object.values(error.errors).join(' '))
    },
  })

  // Handle form submission

  // // Use the query to load the existing movie
  // // and when we get something back, call setUpdatedMovie
  // // to update our state.
  // useQuery<EditReviewType>(['one-review', id], () => loadOneReview(id), {
  //   onSuccess: function (movieBeingLoaded) {
  //     setUpdatingMovie(movieBeingLoaded)
  //   },
  // })

  // function handleStringFieldChange(
  //   event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  // ) {
  //   // IF YOU NEED TO input a number value in the form, simply make a copy of this function and wrap the value in a number. Like this: const value = Number(event.target.value)
  //   const value = event.target.value
  //   const fieldName = event.target.name

  //   //spread operator... is used to integrate the new movie form submit to match the newMovie
  //   const updatedMovie = { ...updatingMovie, [fieldName]: value }

  //   //setUpdatingMovie(updatedMovie)
  // }

  // React-query's mutation to send a POST request to add a Movie.
  //const createNewMovie = useMutation(submitNewMovie)
  // const updateTheMovie = useMutation(submitEditedMovie, {
  //   onSuccess: function () {
  //     history('/')
  //   },
  //   onError: function (apiError: APIError) {
  //     setErrorMessage(Object.values(apiError.errors).join(' '))
  //   },
  // })

  // async function handleFormSubmit(event: React.FormEvent<HTMLFormElement>) {
  //   // Easy to forget, but important to have this preventDefault() for the form to submit properly to the api function.
  //   event.preventDefault()

  //   // Date validation, this check is added to ensure the date is not in the future.
  //   const currentDate = new Date().toISOString().split('T')[0]
  //   if (updatingMovie.releaseDate > currentDate) {
  //     setErrorMessage('The release date cannot be in the future.')
  //     return
  //   }

  //   updateTheMovie.mutate(updatingMovie)
  // }

  return (
    <>
      <div className="container is-mobile is-centered">
        <div>
          <a className="navbar-item is-active has-text-white">Home</a>
          <Link to="*">Click to go back HOME</Link>
        </div>
        <div className="column">
          <div className="box p-6 px-10-desktop py-12-desktop has-background-warning has-text-centered">
            <div className="is-relative mb-6">
              <form>
                {/* {errorMessage ? (
                  <p className="form-error is-warning">{errorMessage}</p>
                ) : null} */}
                <h1 className="title is-4 mt-4 mb-1">Update your review</h1>
                <div className="is-relative">
                  <div className="form-input">
                    <label htmlFor="director">
                      <div className="title">Review</div>
                    </label>
                    <input
                      className="input py-6 has-background-link has-text-warning is-size-3"
                      type="text"
                      name="director"
                      //value={updatingMovie.director}
                    />
                  </div>
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
    </>
  )
}
