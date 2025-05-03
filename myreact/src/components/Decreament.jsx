import React from 'react'

function Decreament({count,setCount}) {
    alert("comp2 is rendered");
    return (
        <>
            <button onClick={()=>setCount(count-1)}>Dec</button>
        </>
    )
}

export default Decreament