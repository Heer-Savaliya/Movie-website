import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
  return (
    <>
      <header className='section-navbar'>
        <section className='top_txt'>
            <div className="head container">
                <div className="head_txt">
                    <p>Get Heer MemberShip , 30-day return or refund guarantee</p>
                </div>
                <div className="sign_in_up">
                    <NavLink href="#">SIGN IN</NavLink>
                    <NavLink href="#">SIGN UP</NavLink>
                </div>
            </div>
        </section>

        <div className="container">
            <div className="navbar-brand">
                <NavLink to="index"><p>HEER</p></NavLink>
            </div>

            <nav className="navbar">
                <ul>
                    <li className="nav-item">
                        <NavLink to="/" className='nav-link'>Home</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/about" className='nav-link'>About</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/movie" className='nav-link'>Movie</NavLink>
                    </li>
                    <li className="nav-item">
                        <NavLink to="/contact" className='nav-link'>Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </div>
      </header>
    </>
  )
}

export default Header
