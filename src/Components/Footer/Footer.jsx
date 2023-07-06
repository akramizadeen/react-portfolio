import React from "react";
import "./Footer.css";
import Wave from '../../img/wave.png'
import Insta from "@iconscout/react-unicons/icons/uil-instagram";
import Facebook from "@iconscout/react-unicons/icons/uil-facebook";
import Twitter from "@iconscout/react-unicons/icons/uil-twitter";
import LinkedIn from "@iconscout/react-unicons/icons/uil-linkedin";
import GitHub from "@iconscout/react-unicons/icons/uil-github";
import { Link } from "react-scroll";

function Footer() {
  return (
    <div className="footer">
      <img src={Wave} alt="" style={{ width: "100%" }} />
      <div className="f-content">
        <div className="quickLinks">
            <h2>Quick Links</h2>
            <ul>
                <Link to='navbar' spy={true} smooth={true}>
                    <li className="listItem">Home</li>
                </Link>
                <Link to='services' spy={true} smooth={true}>
                    <li className="listItem">Services</li>
                </Link>
                <Link to='experience' spy={true} smooth={true}>
                    <li className="listItem">Experience</li>
                </Link>
                <Link to='portfolio' spy={true} smooth={true}>
                    <li className="listItem">Portfolio</li>
                </Link>
                <Link to='t-wrapper' spy={true} smooth={true}>
                    <li className="listItem">Testimonials</li>
                </Link>
                <Link to='contact' spy={true} smooth={true}>
                    <li className="listItem">Contact</li>
                </Link>
            </ul>
        </div>
        <div className="quickLinks">
            <h2>Web Apps</h2>
            <ul>
                <a href='#'><li className="listItem">Teacher Portal</li></a>
                <a href='#'><li className="listItem">Student Portal</li></a>
                <a href='#'><li className="listItem">Admin Portal</li></a>
                <a href='#'><li className="listItem">Web Master</li></a>
            </ul>
        </div>
        <div className="quickLinks">
            <h2>Social Media</h2>
            <div className="f-icons">
                <a href="https://www.instagram.com/akram_izadeen/" target="_blank">
                    <Insta color="#02092D" size={"1rem"} />
                </a>
                <a href="https://www.facebook.com/akramizadeen/" target="_blank">
                    <Facebook color="#02092D" size={"1rem"} />
                </a>
                <a href="https://twitter.com/akramizadeen" target="_blank">
                    <Twitter color="#02092D" size={"1rem"} />
                </a>
                <a href="https://www.linkedin.com/in/akram-izadeen-b87b1a1a9/" target="_blank">
                    <LinkedIn color="#02092D" size={"1rem"} />
                </a>
                <a href="https://github.com/akramizadeen" target="_blank">
                    <GitHub color="#02092D" size={"1rem"} />
                </a>
            </div>
            <h3>Call/WhatsApp</h3>
                <span>+94 77 051 8378</span>
            <h3>Email</h3>
                <span>akramizadeen99@gmail.com</span>
        </div>
        <div className="quickLinks">
            <h2>Contact Us</h2>
            <h3>Address</h3>
                <span>11/3, 6th Mile Post,<br />Madawala Bazaar,<br />Kandy, Sri Lanka.<br />20260</span>
        </div>
      </div>
      <div className="f-b-content">
        <p className="copyrights">&copy; All Rights Reserved 2023 - Akram Izadeen</p>
      </div>
    </div>
  );
}

export default Footer;