import React from 'react'
import { useLoaderData, useParams } from 'react-router-dom'
import '../components/UI/Cards.css'

const MovieDetails = () => {
    const movieData = useLoaderData();
    console.log(movieData);
    const {Poster,Actor,Title , Type , Year,Plot , BoxOffice , imdbID}=movieData;
  return (
    <>
       <li className="hero-container">
        <div className="main-container">
            <div className="poster-container">
                <img src={Poster} className='poster' alt={Title} />
            </div>
            <div className="ticket-container">
                <div className="ticket-content">
                    <h4 className="ticket-movie-title">{Title}</h4>
                    <p className="ticket-current-price">Type : </p>
                    <p className="ticket-current-price">Type : </p>
                        <button className="ticket-buy-btn">Watch Now</button>
                </div>
            </div>
        </div>
       </li>
    </>
  )
}

export default MovieDetails
