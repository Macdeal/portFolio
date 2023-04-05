import React from "react";
import './Card.css'

export function Card({ imageURL, heading, detail, buttonText }) {
    return (
        <div className="card">
            <img src={imageURL} alt="" />
            <span>{heading}</span>
            <span>{detail}</span>
            <button className="c-button">{buttonText}</button>
        </div>
    )
}