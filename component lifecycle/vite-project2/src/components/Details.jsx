import React from 'react'
import { useParams } from 'react-router-dom'

function Details() {
    const { nam, numb } = useParams();

    return (
        <h1>The name is : {nam} and the number is : {numb}</h1>
    )
}

export default Details