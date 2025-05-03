import React, { useEffect, useState } from 'react'

function Comp2() {

    const [count2, setCount2] = useState(0)
    alert("Comp2 rendered");

    useEffect(function () {
        alert("comp 2 mounted");

        return (function () {
            alert("comp 2 unmounted")
        })
    }, [])

    useEffect(function () {
        alert("count 2 updated " + count2);

        return (function () {
            alert("count 2 removed " + count2)
        })
    }, [count2])

    return (
        <div style={{ backgroundColor: "blue" }}>
            <h1>Comp 2</h1>
            <h1>{count2}</h1>
            <button onClick={() => setCount2(count2 + 1)}>Add</button>
        </div>
    )
}

export default Comp2