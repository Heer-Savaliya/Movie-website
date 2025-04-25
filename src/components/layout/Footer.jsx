import React from 'react'
import { FaFacebook ,FaInstagram ,FaLinkedin ,FaGithub ,FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <>
      <footer className='section-footer'>
        <div className="grid grid-col--two">
            <div className="navbar-brand">
                <h2>HEER</h2>
                <p>Lorem ipsum dolor sit elit. Animi hic ut, exercitationem officiis doloremque ab. Itaque, non nesciunt laboriosam temporibus aliquid dolor architecto harum maiores molestiae quam soluta ipsam fugiat!</p>
                <div className="social-links">
                    <i><FaFacebook /></i>
                    <i><FaInstagram /></i>
                    <i><FaLinkedin /></i>
                    <i><FaGithub /></i>
                    <i><FaYoutube /></i>
                </div>
            </div>
            <div className="navbar-elements">
                <div className="grid grid-col--three">
                    <div className="element">
                        <ul>
                            <h2>Shopping</h2>
                            <li>Computer store</li>
                            <li>Laptop store</li>
                            <li>Accessories</li>
                            <li>Sales and discount</li>
                        </ul>
                    </div>
                    <div className="element">
                        <ul>
                            <h2>Experience</h2>
                            <li>Contact us</li>
                            <li>Payment method</li>
                            <li>Delivery</li>
                            <li>Return and exchange</li>
                        </ul>
                    </div>
                    <div className="element">
                        <ul>
                            <h2>Newsletter</h2>
                            <li>Be the first to know about the new arriavls, sales and promos..!</li>
                            <input type="email" name="newsletter" id=""  placeholder='Enter your email'/>
                
                        </ul>
                    </div>
                </div>
            </div>
        </div>
            <hr />
            <p className='copyright'>All right reserved by Heer@gmail.com</p>
      </footer>
    </>
  )
}

export default Footer
