import React from 'react'
import './Navbar.css'
import { useSelector } from 'react-redux';

function Navbar() {
    const username = useSelector(state => state.user.username);
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