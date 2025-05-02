import React, { useState } from 'react'
import { useMutation, useQuery } from 'react-query'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { APIError, NewReviewType } from '../types'
import { authHeader } from '../auth'

async function loadOneReview(id: string | undefined) {
  const response = await fetch(`/api/reviews/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

async function submitEditedReview(reviewToUpdate: NewReviewType) {
  const response = await fetch(`/api/reviews/${reviewToUpdate.id}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
      Authorization: authHeader(),
    },
    body: JSON.stringify(reviewToUpdate),
  })

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

export function EditReview() {
  const history = useNavigate()
  const [errorMessage, setErrorMessage] = useState('')
  const { id } = useParams<{ id: string }>()

  // Load existing review data, then call setUpdatingReview to update state.
  useQuery<NewReviewType>(['one-review', id], () => loadOneReview(id), {
    onSuccess: function (reviewBeingLoaded) {
      setUpdatingReview(reviewBeingLoaded)
    },
  })

  // Initial state for review data
  const [updatingReview, setUpdatingReview] = useState<NewReviewType>({
    id: undefined,
    userId: undefined,
    body: '',
    stars: 0,
    createdAt: undefined,
    movieClassId: 0,
  })

  function handleStringFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    // IF YOU NEED TO input a number value in the form, simply make a copy of this function and wrap the value in a number. Like this: const value = Number(event.target.value)
    const value = event.target.value
    const fieldName = event.target.name

    //spread operator... is used to integrate the new movie form submit to match the newMovie
    const updatedReview = { ...updatingReview, [fieldName]: value }

    setUpdatingReview(updatedReview)
  }

  const updateTheReview = useMutation(submitEditedReview, {
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

    updateTheReview.mutate(updatingReview)
  }

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
              <form onSubmit={handleFormSubmit}>
                {errorMessage ? (
                  <p className="form-error is-warning">{errorMessage}</p>
                ) : null}
                <h1 className="title is-4 mt-4 mb-1">Update your review</h1>
                <div className="is-relative">
                  <div className="form-input">
                    <label htmlFor="director">
                      <div className="title">Review</div>
                    </label>
                    <input
                      className="input py-6 has-background-link has-text-warning is-size-3"
                      type="text"
                      name="body"
                      value={updatingReview.body}
                      onChange={handleStringFieldChange}
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
