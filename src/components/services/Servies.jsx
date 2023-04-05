import React from "react";
import './Services.css'

import Heart from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import { Card } from "../Card/Card";

function Services() {
    return (
        <div className="services">
            <div className="awesome">
                <span>My Awesome</span>
                <span>Services</span>
                <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptatibus doloribus, amet fugiat deserunt, <br />
                    ut dolorem minus dicta vel hic nisi impedit quaerat maiores, excepturi ab. Iusto possimus corporis dolorem vitae.
                </span>
                <button className="button s-button">Download CV</button>
                <div className="blur s-blur" style={{ background: '#abf1ff94' }}></div>
            </div>
            <div className="cards">
                <div>
                    <Card imageURL={Heart} heading='Design' detail='figma, sketch, Adobe, Photoshop' buttonText={'Learn More'} />
                </div>
                {/* <div>
                    <Card imageURL={Glasses} heading='Design' detail='figma, sketch, Adobe, Photoshop' />
                </div>
                <div>
                    <Card imageURL={Humble} heading='Design' detail='figma, sketch, Adobe, Photoshop' />
                </div> */}
            </div>
        </div>
    )
}

export default Services;