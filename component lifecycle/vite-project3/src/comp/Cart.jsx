import React from 'react'
import Profile from './Profile'

function Cart({ name, setName }) {
    return (
        <>
            <div>Cart : {name}</div>

            <Profile name={name} setName={setName} />
        </>
    )
}

export default Cart