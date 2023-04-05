import React from "react";

import './Intro.css'
import gitHub from "../../img/github.png"
import linkedIn from "../../img/linkedin.png"
import instagram from "../../img/instagram.png"
import vector1 from "../../img/Vector1.png"
import vector2 from "../../img/Vector2.png"
import boy from "../../img/boy.png"
import thumbUp from "../../img/thumbup.png"
import crown from "../../img/crown.png"
import glassImoji from "../../img/glassesimoji.png"
import Floating from "../Floating/Floating";


function Intro() {
    return (
        <div className="intro">
            <div className="i-left">
                <div className="i-name">
                    <span>Hello!  I'm Musthaq </span>
                    <span>Ahmad </span>
                    <span>Frontend Developer with high level of experience in web designing and devepment </span>
                </div>
                <button className="button i-button">Hire me</button>
                <div className="i-icon">
                    <a href="">
                        <img src={gitHub} alt="github" />
                    </a>
                    <a href="">
                        <img src={linkedIn} alt="linkedin" />
                    </a>
                    <a href="">

                        <img src={instagram} alt="instagram" />
                    </a>
                </div>
            </div>
            <div className="i-right">
                <img src={vector1} alt="" />
                <img src={vector2} alt="" />
                <img src={boy} alt="" />
                <img src={glassImoji} alt="" />
                <div className="i-float1">
                    <Floating bgURL={crown} textTop='Web' textBottom='Developer' />
                </div>
                <div className="i-float2">
                    <Floating bgURL={thumbUp} textTop='Web' textBottom='Designer' />
                </div>
                <div className="blur" style={{ background: 'rgb(238 210 255)' }}></div>
                <div className="blur" style={{ background: '#c1f5ff', top: '30%', left: '17rem' }}></div>
            </div>



        </div>

    )
}

export default Intro;