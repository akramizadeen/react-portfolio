import React from 'react'
import './Works.css'
import Upwork from '../../img/Upwork.png'
import Fiverr from '../../img/fiverr.png'
import Amazon from '../../img/amazon.png'
import Shopify from '../../img/Shopify.png'
import Facebook from '../../img/Facebook.png'
import { Link } from 'react-scroll'

function Works() {
  return (
    <div className="works">
        {/* left side */}
        <div className="awesome">
            <span>Works for All these</span>
            <span>Brands & Clients</span>
            <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, iure.
                <br/>
                Rerum impedit sunt exercitationem fuga inventore.
                <br/>
                Rerum impedit sunt exercitationem fuga inventor eamet consectetur.
                <br/>
                Rerum impedit sunt exercitationem fuga.
            </span>
            <Link to='contact' spy={true} smooth={true}>
                <button className="button s-button">Hire Me</button>
            </Link>
            <div className="blur s-blur1" style={{ background: "#ABF1FF94" }}></div>
        </div>
        {/* rigth side */}
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
            {/* background circle */}
            <div className="w-backCircle blueCircle"></div>
            <div className="w-backCircle yellowCircle"></div>
        </div>
    </div>
  )
}

export default Works