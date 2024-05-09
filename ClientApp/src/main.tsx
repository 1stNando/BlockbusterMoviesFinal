import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'

import { App } from './App'
import { QueryClient, QueryClientProvider } from 'react-query'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import { NewMovie } from './pages/AddNewMovie'

//react-query library configuration
//Instantiates the query client method we need to query the database using react-query library we installed.
const queryClient = new QueryClient()

const routingObject = createBrowserRouter([
  {
    path: '*',
    element: <App />,
  },
  {
    path: '/new',
    element: <NewMovie />,
  },
])

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routingObject} />
      {/* <App /> */}
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
