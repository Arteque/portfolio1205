import React from 'react'
import ReactDOM from 'react-dom/client'
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
 } from 'react-router-dom'

import Main from './Layouts/Main'
import Index from './Pages/Index'
import Error from './Pages/Error'
import './index.css'


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" 
    element={<Main />}
    errorElement={<Error />}
    >
      <Route index element={<Index />} />

    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
