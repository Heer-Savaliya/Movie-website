import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Cards from '../components/UI/Cards';

const Movie = () => {
  const moviesData = useLoaderData();
  console.log(moviesData);
  
  return (
    <>
    <ul className=' grid grid-col--four'>
      {moviesData.Search.map((curMovie)=>{
        return <Cards key={curMovie.imdbID} curMovie={curMovie} />
      })}
    </ul>
    </>
  )
}

export default Movie
