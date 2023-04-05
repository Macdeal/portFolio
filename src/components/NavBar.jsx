import React from "react";
import './NavBar.css'

const data = {
    nameText: 'Musthaq',
    buttonLabel: 'Toggle',
    lists: [
        'Home', 'Services', 'Testimonials', 'Portfolio', 'Experience'
    ]
}

function NavBar() {
    return <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">{data.nameText}</div>
            <span>{data.buttonLabel}</span>
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    {data.lists.map((list) => (
                        <li>{list}</li>
                    ))}
                </ul>
            </div>
            <button className="button" type="button n-button">Contact</button>
        </div>
    </div >
}

export default NavBar;