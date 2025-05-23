import React, { useContext } from 'react'
import './Navbar.css'
import { UserContext } from '../context/UserContext'

function Navbar() {
    const {username} =useContext(UserContext);
    return (
        <div className="navcont">
            <div className="box">Home</div>
            <div className="box">About</div>
            <div className="box">Contact</div>
            <div className="box" id="namediv">{username ? username : "notlogin"}</div>
        </div>
    )
}

export default Navbar