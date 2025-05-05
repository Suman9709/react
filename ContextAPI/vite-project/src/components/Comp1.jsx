import React, { useState } from 'react'
import Comp2 from './Comp2'

function Comp1() {
    return (
        <div style={{ border: "2px solid black", margin: "5px", padding: "5px" }}>
            <h2>Comp1</h2>
            <Comp2/>
        </div>
    )
}

export default Comp1