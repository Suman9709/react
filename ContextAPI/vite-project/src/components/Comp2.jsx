import React, { useContext } from 'react'
import { CounterContext } from '../contexts/CounterContext'

function Comp2() {
    const {setCount} = useContext(CounterContext);
    return (
        <div style={{ border: "2px solid black", margin: "5px", padding: "5px" }}>
            <h3>Comp2</h3>
            <button onClick={()=>setCount(prev=>prev+1)}>Add</button>
        </div>
    )
}

export default Comp2