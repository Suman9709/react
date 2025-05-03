import React from 'react'

function Info({ user }) {
    return (
        <>
            <h1> this is info page of {user ? "User" : "Admin"}</h1>
        </>
    )
}

export default Info