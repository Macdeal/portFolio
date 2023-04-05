import React from "react";
import './Floating.css'

function Floating({ bgURL, textTop, textBottom }) {
    return <div className="floating">
        <img src={bgURL} alt="bgurl" />
        <span>
            {textTop}
            <br />
            {textBottom}
        </span>
    </div>
}

export default Floating;