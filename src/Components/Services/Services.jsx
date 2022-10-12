import React from 'react'
import './Services.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Cards/Card'
import Resume from './Resume.pdf'

function Services() {
  return (
    <div className="services">
        {/* left side */}
        <div className="awesome">
            <span>My Awesome</span>
            <span>Services</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iure.<br/>
                Rerum impedit sunt exercitationem fuga inventore.
            </span>
            <a href={Resume} download>
                <button className="button s-button">Download CV</button>
            </a>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* right side */}
        <div className="cards">
            <div style={{ left: "14rem" }}>
                <Card
                    emoji = {HeartEmoji}
                    heading = 'Design'
                    text = 'Figma, Sketch, Photoshop, Adobe, Adobe XD'
                />
            </div>
            <div style={{ top: "12rem", left: "-4rem" }}>
                <Card
                    emoji = {Glasses}
                    heading = 'Developer'
                    text = 'HTML, CSS, JavaScript, React'
                />
            </div>
            <div style={{ top: "19rem", left: "12rem" }}>
                <Card
                    emoji = {Humble}
                    heading = 'UI/UX'
                    text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat tenetur,'
                />
            </div>
            <div className='blur s-blur2' style={{ background: "var(--purple)" }}></div>
        </div>
    </div>
  )
}

export default Services