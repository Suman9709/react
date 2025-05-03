import React from 'react'

function Increament({count, setCount}) {

    alert("comp 1 is renderd")
    return (
        <>
            <button onClick={function(){setCount(count+1)}}>Inc</button>
        </>
    )
}

export default Increament