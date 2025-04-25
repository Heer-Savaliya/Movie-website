import React from 'react'
import { NavLink } from 'react-router-dom'
import './Cards.css'

const Cards = ({curMovie}) => {
    const {imdbID , Poster} = curMovie;
  return (
    <>
       <li className="hero-container">
        <div className="main-container">
            <div className="poster-container">
                <img src={Poster} className='poster' alt={imdbID} />
            </div>
            <div className="ticket-container">
                <div className="ticket-content">
                    <NavLink to={`/movie/${imdbID}`}>
                        <button className="ticket-buy-btn">Watch Now</button>
                    </NavLink>
                </div>
            </div>
        </div>
       </li>
    </>
  )
}

export default Cards
