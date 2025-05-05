import React from 'react'
import './Navbar.css'

function Navbar() {
    return (
        <div className="navcont">
            <div className="box">Home</div>
            <div className="box">About</div>
            <div className="box">Contact</div>
            <div className="box" id="namediv">Name</div>
        </div>
    )
}

export default Navbar