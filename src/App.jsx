import React from 'react'
import { RouterProvider, Routes } from 'react-router'
import { routes } from './Components/Routes/AppRoutes'

const App = () => {
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App