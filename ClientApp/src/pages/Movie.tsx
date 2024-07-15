import React, { useState } from 'react'
//import BBVLogo from '.BBVLogo.png'
import { Link, useParams } from 'react-router-dom'
import { MovieClassType, ReviewType } from '../types'
import { useMutation, useQuery } from 'react-query'
import BBVLogo from '../images/BBVLogo.png'

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
          <div className="hero-foot ml-5">Footer of the hero section!!!</div>
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
                  <p className="navbar-item is-active has-text-white">Home</p>
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
                  <span className="navbar-item">
                    {/* Search input for table */}
                    {/* <form className="search">
                      <input
                        type="text"
                        placeholder="Search database..."
                        value={searchText}
                        onChange={(event) => setSearchText(event.target.value)}
                      />
                    </form> */}
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
        {/* //end of navbar Top part/////////////////////////////////////////////////////////// */}
        <div className="container">
          <section className="section">
            <div className="container">
              <div className="column is-half is-offset-one-quarter">
                <div>
                  <a className="navbar-item is-active has-text-primary">
                    <Link className="is-active has-text-primary" to="*">
                      Click here to go back HOME
                    </Link>
                  </a>
                </div>
                <div className="box p-6 px-10-desktop py-12-desktop has-background-warning has-text-centered">
                  <form
                    onSubmit={function (event) {
                      event.preventDefault()
                      createNewReview.mutate(newReview)
                    }}
                  >
                    <span className="has-text-link has-text-weight-semibold is-size-4">
                      Viewing detailed data of one movie
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
                        <h1>Reviews for {movie.title}</h1>

                        <ul className="reviews">
                          {movie.reviews.map((review) => (
                            <li key={review.id}>
                              <div className="body">
                                <p>{review.body}</p>
                              </div>
                              <time>{review.createdAt}</time>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                        Number of reviews
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
                              className="form-control textarea has-background-link has-text-warning"
                              // value={newReview.body}
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
                        <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
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

                    {/* render list of reviews */}
                    {/* <div className="is-relative mb-6 ">
                      <div className="input py-6 has-background-link has-text-warning is-size-3">
                        <ul className="input py-6 has-background-link has-text-warning is-size-3">
                          {movie.reviews.map((review) => (
                            <li key={props.review.id}>
                              <div className="body">
                                <p>{review.body}</p>
                              </div>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <span className="is-absolute is-top-0 is-left-0 -mt-2 ml-3 has-background-warning has-text-grey-dark is-size-7">
                        Reviews
                      </span>
                    </div> */}

                    {/* /////end of middle section */}

                    {/* <label className="is-flex mb-10">
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
                </label> */}
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
            <p className="subtitle">
              Subtitle Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Earum maiores possimus quia recusandae.
            </p>
          </div>
        </div>

        {/* //Middle section */}
        {/* <SignUp /> */}

        {/* Footer: will stick at the bottom */}
        <div className="hero-footer ">
          <nav className="tabs">
            <div className="column is-three-fifths is-offset-one-fifth">
              <ul className="is-center">
                <li className="is-active is-background-warning">
                  <p>Overview</p>
                </li>
                <li>
                  <p>
                    Github{' '}
                    <span className="icon">
                      <i className="fab fa-github"></i>
                    </span>
                  </p>
                </li>
                <li>
                  <p>Grid</p>
                </li>
                <li>
                  <p>Elements</p>
                </li>
                <li>
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
    </>
  )
}
