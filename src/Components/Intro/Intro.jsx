import React from 'react'
import './Intro.css'
import GitHub from '../../img/github.png';
import LinkedIn from '../../img/linkedin.png';
import Instagram from '../../img/instagram.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import AkmIzdn from '../../img/akmizdn.png';
import ThumpUp from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import GlassesImoji from '../../img/glassesimoji.png';
import FloatingDiv from '../FloatingDiv/FloatingDiv';

function Intro() {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hy! I Am</span>
                <span>Akram Izadeen</span>
                <span>Frontend Developer with high level of experience in web designing and development, producting the quality work.</span>
            </div>
            <button className="button i-button">Hire Me</button>
            <div className="i-icons">
                <img src={GitHub} alt="" />
                <img src={LinkedIn} alt="" />
                <img src={Instagram} alt="" />
            </div>
        </div>
        <div className="i-right">
            <img src={Vector1} alt="" />
            <img src={Vector2} alt="" />
            <img src={AkmIzdn} alt="" />
            <img src={GlassesImoji} alt="" />
            <div style={{ top: '-4%', left: '68%' }}>
                <FloatingDiv image={Crown} txt1='Web' txt2='Developer' />
            </div>
            <div style={{ top: '18rem', left: '0rem' }}>
                <FloatingDiv image={ThumpUp} txt1='Best Design' txt2='Award' />
            </div>
            <div className='blur' style={{ background: "rgb(238 210 255)" }}></div>
            <div className='blur' style={{ background: "#c1f5ff", top: "17rem", width: "21rem", height: "11rem", left: "-9rem" }}></div>
        </div>
    </div>
  )
}

export default Intro