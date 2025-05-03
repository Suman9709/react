import React from 'react'
import { useParams } from 'react-router-dom'

function Userauth() {

    const { userID } = useParams();

    return (
        <h1>The user id is : {userID}</h1>
    )
}

export default Userauth