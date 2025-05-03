import React, { useEffect, useState } from 'react'

function Comp1() {

    const [count1, setCount1] = useState(0);
    alert("Comp1 rendered");

    useEffect(function () {
        alert("comp 1 mounted");

        return (function () {
            alert("comp 1 unmounted")
        })
    }, [])

    useEffect(function () {
        alert("count 1 updated " + count1);

        return (function () {
            alert("count 1 removed " + count1)
        })
    }, [count1])

    return (
        <div style={{backgroundColor:"red"}}>
            <h1>Comp 1</h1>
            <h1>{count1}</h1>
            <button onClick={() => setCount1(count1 + 1)}>Add</button>
        </div>
    )
}

export default Comp1