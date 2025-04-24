import React from 'react';
import './Card.css';

function Card({ color, img, title, desc }) {
    return (
        <div className="cont" style={{ backgroundColor: color }}>
            <img className="img" src={img} alt="" />
            <h1>{title}</h1>
            <h3>{desc}</h3>
        </div>
    )
}

export default Card