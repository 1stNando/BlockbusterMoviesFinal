import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import { App } from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { NewMovie } from './pages/AddNewMovie'
import { SignUp } from './pages/SignUp'
import { Movie } from './pages/Movie'
//import { SingleMovieClassFromList } from './components/SingleMovieClassFromList'

//react-query library configuration
//Instantiates the query client method we need to query the database using react-query library we installed.
const queryClient = new QueryClient()

const routingObject = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
  {
    path: '/signup',
    element: <SignUp />,
  },
  {
    path: '/new',
    element: <NewMovie />,
  },
  {
    path: '/movieclasses/:id',
    element: <Movie />,
  },
])

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routingObject} />
      {/* <App /> location before using react-query and router.*/}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
