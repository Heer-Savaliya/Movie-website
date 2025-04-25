import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Movie from './pages/Movie'
import Contact, { contactData } from './pages/Contact'
import './App.css'
import AppLayout from './components/layout/AppLayout'
import Error from './pages/Error'
import { GetApiData } from './api/GetApiData'
import MovieDetails from './pages/MovieDetails'
import { GetMovieDetail } from './api/GetMovieDetail'

const App = () => {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<AppLayout />,
      errorElement:<Error />,
      children:[
        {
          path:"/",
          element:<Home />
        },
        {
          path:"/about",
          element:<About />
        },
        {
          path:"/movie",
          element:<Movie />,
          loader:GetApiData
        },
        {
          path:"/movie/:movieID",
          element:<MovieDetails />,
          loader:GetMovieDetail
        },
        {
          path:"/contact",
          element:<Contact />,
          action:contactData
        },
        // {
        //   path:"*",
        //   element:<Error />
        // },
      ]
    },
    
  ])


  // const router = createBrowserRouter(
  //   createRoutesFromElements(
  //     <>
  //       <Route path="/" element={<Home />}/> 
  //       <Route path="/about" element={<About />}/> 
  //       <Route path="/movie" element={<Movie />}/> 
  //       <Route path="/contact" element={<Contact />}/> 
  //     </>
  //   )
  // )
  return (
    <RouterProvider router={router}/>
  )
}

export default App
