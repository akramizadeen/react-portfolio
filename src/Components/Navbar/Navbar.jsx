import React from 'react'
import { Link } from 'react-scroll'
import './Navbar.css'

function Navbar() {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">Akram Izadeen</div>
            <span></span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul style={{ listStyleType: 'none' }}>
                    <li>
                        <Link activeClass='active' to='navbar' spy={true} smooth={true}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='services' spy={true} smooth={true}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link to='experience' spy={true} smooth={true}>
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link to='portfolio' spy={true} smooth={true}>
                            Portfolio
                        </Link>
                    </li>
                    <li>
                        <Link to='t-wrapper' spy={true} smooth={true}>
                            Testimonials
                        </Link>
                    </li>
                </ul>
            </div>
            <Link to='contact' spy={true} smooth={true}>
                <button className="button n-button">Contact</button>
            </Link>
        </div>
    </div>
  )
}

export default Navbar