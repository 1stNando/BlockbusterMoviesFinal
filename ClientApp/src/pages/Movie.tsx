import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { MovieClassType, ReviewType } from '../types'
import { useMutation, useQuery } from 'react-query'
import BBVLogo from '../images/BBVLogo.png'

import { formatDate } from 'date-fns'

// Page representing one movie view. Uses the {id} to fetch corresponding data. http://localhost:5000/movieclasses/35

// type ReviewsFromMovieProps = {
//   review: ReviewType
// }

async function loadOneMovie(id: string | undefined) {
  const response = await fetch(`/api/movieclasses/${id}`)

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

// handle submitting form for review
async function submitNewReview(review: ReviewType) {
  const response = await fetch(`/api/Reviews`, {
    method: 'POST',
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(review),
  })

  if (response.ok) {
    return response.json()
  } else {
    throw await response.json()
  }
}

// Represent the default value of our object when there is no data being returned from react query. Null object pattern rather than guard clause. Handles the case where the object is missing while waiting for the real data to be returned.
const NullMovie: MovieClassType = {
  id: undefined,
  title: '',
  genre: '',
  director: '',
  releaseDate: '',
  reviews: [],
}

export function Movie() {
  // Date format needed to post a review correctly.
  const dateFormat = `EEEE, MMMM do, yyyy 'at' h:mm aaa`

  // React router needed to find id of movie.
  const { id } = useParams<{ id: string }>()

  const { refetch, data: movie = NullMovie } = useQuery<MovieClassType>(
    ['one-movie', id],
    () => loadOneMovie(id)
  )
  //Guard clause approach, as opposed to null object pattern.
  // if (movie === undefined) {
  //   return null
  // }

  const [newReview, setNewReview] = useState<ReviewType>({
    body: '',
    stars: 5,
    movieClassId: Number(id),
  })

  const createNewReview = useMutation(submitNewReview, {
    onSuccess: function () {
      refetch()
      setNewReview({
        ...newReview,
        body: '',
        stars: 5,
      })
    },
  })

  // method to track the changes of the text input fields
  function handleNewReviewTextFieldChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const name = event.target.name
    const value = event.target.value
    setNewReview({ ...newReview, [name]: value })
  }

  function handleStarRadioButton(newStars: number) {
    setNewReview({ ...newReview, stars: newStars })
  }

  return (
    <>
      <section className="hero is-small">
        <div className="hero-head">
          <div className="hero-body has-background-warning">
            <div className="container ml-0">
              <img className="BBVLogo2" src={BBVLogo} alt="BBVLogo" />
            </div>

            {/* <div className="container">
              <div>
                <p>
                  The container width will be full below screen size of 1024px
                </p>

                <h3>GeeksforGeeks!!!!</h3>
              </div>
            </div> */}
          </div>
          <div className="hero-foot ml-5">Blockbuster Video Movie Database</div>
        </div>
      </section>
      {/* Creation of a navbar */}
      <section className="hero is-link is-medium">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                {/* <a className="navbar-item">
                  <img className="BBVLogo" src={BBVLogo} alt="BBVLogo" />
                </a> */}
              </div>
              <div id="navbarMenuHeroA" className="navbar-menu">
                <div className="navbar-end">
                  <p className="navbar-item is-active has-text-white">
                    <Link className="is-active has-text-primary" to="*">
                      Home
                    </Link>
                  </p>
                  <p className="navbar-item has-text-white">Examples</p>
                  <Link className="navbar-item has-text-white" to="/signup">
                    {' '}
                    Sign Up
                  </Link>
                  <p className="navbar-item has-text-white">Documentation</p>

                  <Link className="navbar-item has-text-white" to="/new">
                    Add a Movie
                  </Link>
                  <span className="navbar-item">
                    <p className="button is-primary is-inverted">
                      <span className="icon">
                        <i className="fab fa-github"></i>
                      </span>
                      <span>Download</span>
                    </p>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* //end of navbar Top part/////////////////////////////////////////////////////////// */}
        <div>
          <div>
            <h1>TESTING REVIEW</h1>
            <form
              onSubmit={function (event) {
                event.preventDefault()
                createNewReview.mutate(newReview)
              }}
            ></form>
            <textarea
              className="form-control"
              id="body"
              aria-describedby="bodyHelp"
              value={newReview.body}
              onChange={handleNewReviewTextFieldChange}
            />
            <input
              id="star-rating-1"
              type="radio"
              name="stars"
              checked={newReview.stars === 1}
              onChange={() => handleStarRadioButton(1)}
            />
            <input
              id="star-rating-2"
              type="radio"
              name="stars"
              checked={newReview.stars === 2}
              onChange={() => handleStarRadioButton(2)}
            />
            <input
              id="star-rating-3"
              type="radio"
              name="stars"
              checked={newReview.stars === 3}
              onChange={() => handleStarRadioButton(3)}
            />
            <input
              id="star-rating-4"
              type="radio"
              name="stars"
              checked={newReview.stars === 4}
              onChange={() => handleStarRadioButton(4)}
            />
            <input
              id="star-rating-5"
              type="radio"
              name="stars"
              checked={newReview.stars === 5}
              onChange={() => handleStarRadioButton(5)}
            />
            <label htmlFor="star-rating-5">5 stars</label>

            <p>
              <input type="submit" value="Submit" />
            </p>

            {/* //////////////// */}
          </div>
        </div>

        <div className="container">
          <section className="section">
            <div className="container">
              <div className="column is-half is-offset-one-quarter">
                <div className="box p-6 px-10-desktop py-12-desktop has-background-warning has-text-centered">
                  <form
                    onSubmit={function (event) {
                      event.preventDefault()
                      createNewReview.mutate(newReview)
                    }}
                  >
                    <span className="has-text-link has-text-weight-semibold is-size-4">
                      Viewing detailed information
                    </span>
                    <h3 className="title is-4 mt-4 mb-1">
                      Movie title: {movie.title}
                    </h3>

                    <div className="is-relative mb-6">
                      <div className="input py-6 has-background-link has-text-warning is-size-3">
                        {movie.director}
                      </div>
                      <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                        Director
                      </span>
                    </div>

                    <div className="is-relative mb-6 ">
                      <div className="input py-6 has-background-link has-text-warning is-size-3">
                        {movie.genre}
                      </div>
                      <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                        Genre
                      </span>
                    </div>

                    <div className="is-relative mb-6 ">
                      <div className="input py-6 has-background-link has-text-warning is-size-3">
                        {movie.releaseDate}
                      </div>
                      <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                        Release date
                      </span>
                    </div>

                    <div className="is-relative mb-6 ">
                      <div className="input py-6 has-background-link has-text-warning is-size-3">
                        {movie.reviews.length}
                      </div>
                      <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                        Number of reviews
                      </span>
                    </div>

                    <div className="is-relative mb-6">
                      <div className="py-6 has-background-link has-text-warning is-size-3">
                        <h1 className="title">Reviews for {movie.title}</h1>

                        <ul className="reviews">
                          {movie.reviews.slice(-3).map((review) => (
                            <li key={review.id}>
                              <div className="box body py-6 has-background-link has-text-warning is-size-3">
                                <h1>{review.body}</h1>
                              </div>

                              <time>
                                {review.createdAt
                                  ? formatDate(
                                      new Date(review.createdAt),
                                      dateFormat
                                    )
                                  : null}
                              </time>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                        Latest reviews
                      </span>
                    </div>

                    <div className="is-relative mb-3 ">
                      <div>
                        <div className="is-relative">
                          <h1 className="title is-4 mt-4 mb-1">
                            Add a new review to our database
                          </h1>
                          <div className="form-input">
                            <textarea
                              name="body"
                              className="textarea has-background-link has-text-warning"
                              value={newReview.body}
                              onChange={handleNewReviewTextFieldChange}
                              style={{ fontSize: '1.5rem', width: '100%' }}
                            ></textarea>
                            <input
                              id="star-rating-1"
                              type="radio"
                              name="stars"
                              checked={newReview.stars === 1}
                              onChange={() => handleStarRadioButton(1)}
                            />
                            <input
                              id="star-rating-2"
                              type="radio"
                              name="stars"
                              checked={newReview.stars === 2}
                              onChange={() => handleStarRadioButton(2)}
                            />
                            <input
                              id="star-rating-3"
                              type="radio"
                              name="stars"
                              checked={newReview.stars === 3}
                              onChange={() => handleStarRadioButton(3)}
                            />
                            <input
                              id="star-rating-4"
                              type="radio"
                              name="stars"
                              checked={newReview.stars === 4}
                              onChange={() => handleStarRadioButton(4)}
                            />
                            <input
                              id="star-rating-5"
                              type="radio"
                              name="stars"
                              checked={newReview.stars === 5}
                              onChange={() => handleStarRadioButton(5)}
                            />
                          </div>
                        </div>
                        <span className="is-absolute is-top-0 is-left-0 mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                          Leave a review!
                        </span>
                      </div>
                    </div>

                    <div>
                      <input
                        className="button mt-5 py-7 has-background-link has-text-warning is-size-4"
                        type="submit"
                        value="Submit"
                      />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </div>
        {/* ///////////////////////////////////////////////////////////////// */}

        {/* Hero content: will be in the middle */}
        <div className="hero-body mb-0 py-5">
          <div className="container has-text-centered">
            <p className="title is-size-3">Please Join!</p>
            <p className="subtitle">Thank you for visiting this website</p>
          </div>
        </div>

        {/* //Middle section */}
        {/* <SignUp /> */}

        {/* Footer: will stick at the bottom */}
        <div className="hero-footer ">
          <nav className="tabs">
            <div className="column is-three-fifths is-offset-one-fifth">
              <ul className="is-center">
                <li>
                  <h1>Overview</h1>
                </li>
                <li>
                  <a>
                    Github{' '}
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                  </a>
                </li>
                <li>
                  <h1>Grid</h1>
                </li>
                <li>
                  <h1>Elements</h1>
                </li>
                <li className="ml-3 mb-4">
                  Made with
                  <img
                    className="BulmaLogo ml-2"
                    src="https://bulma.io/assets/images/bulma-type-white.png"
                    alt="Logo"
                  />
                  .io
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

      <div>
        <section className="section">
          <div className="container">
            <h1 className="title">REVIEWS</h1>
            <p className="subtitle">You can input a review here</p>
            <div className="field">
              <div className="control">
                <input className="input" type="text" placeholder="Input" />
              </div>
            </div>

            <div className="field">
              <p className="control">
                <span className="select">
                  <select>
                    <option>Select dropdown</option>
                  </select>
                  <select>
                    <option>Option</option>
                  </select>
                </span>
              </p>
            </div>
            <div className="buttons">
              <a className="button is-primary">Primary</a>
              <a className="button is-link">Link</a>
            </div>

            <div className="card">
              <div className="card-content">
                <div className="title">
                  <form
                    onSubmit={function (event) {
                      event.preventDefault()
                      createNewReview.mutate(newReview)
                    }}
                  >
                    <div className="form-input">
                      <label htmlFor="body">Body</label>

                      <textarea
                        className="textarea"
                        placeholder="Write your review here"
                        name="body"
                        value={newReview.body}
                        onChange={handleNewReviewTextFieldChange}
                      />
                      <div className="rating">
                        <input
                          id="star-rating-1"
                          type="radio"
                          name="stars"
                          value="1"
                          checked={newReview.stars === 1}
                          onChange={() => handleStarRadioButton(1)}
                        />
                        <label htmlFor="star-rating-1">1 star</label>
                        <input
                          id="star-rating-2"
                          type="radio"
                          name="stars"
                          value="2"
                          checked={newReview.stars === 2}
                          onChange={() => handleStarRadioButton(2)}
                        />
                        <label htmlFor="star-rating-2">2 stars</label>
                        <input
                          id="star-rating-3"
                          type="radio"
                          name="stars"
                          value="3"
                          checked={newReview.stars === 3}
                          onChange={() => handleStarRadioButton(3)}
                        />
                        <label htmlFor="star-rating-3">3 stars</label>
                        <input
                          id="star-rating-4"
                          type="radio"
                          name="stars"
                          value="4"
                          checked={newReview.stars === 4}
                          onChange={() => handleStarRadioButton(4)}
                        />
                        <label htmlFor="star-rating-4">4 stars</label>
                        <input
                          id="star-rating-5"
                          type="radio"
                          name="stars"
                          value="5"
                          checked={newReview.stars === 5}
                          onChange={() => handleStarRadioButton(5)}
                        />
                        <label htmlFor="star-rating-5">5 stars</label>

                        <div className="star-rating">
                          <label
                            htmlFor="star-rating-1"
                            aria-label="1 star"
                            title="1 star"
                          ></label>
                          <label
                            htmlFor="star-rating-2"
                            aria-label="2 stars"
                            title="2 stars"
                          ></label>
                          <label
                            htmlFor="star-rating-3"
                            aria-label="3 stars"
                            title="3 stars"
                          ></label>
                          <label
                            htmlFor="star-rating-4"
                            aria-label="4 stars"
                            title="4 stars"
                          ></label>
                          <label
                            htmlFor="star-rating-5"
                            aria-label="5 stars"
                            title="5 stars"
                          ></label>
                        </div>
                      </div>
                      <span className="subtitle note">
                        Enter a brief summary of your review. Example:{' '}
                        <strong>Excellent movie!</strong>
                      </span>
                      <button className="button" type="submit" value="Submit">
                        <h1>
                          <input type="submit" value="Submit" />
                        </h1>
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}
