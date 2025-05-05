import React, { useContext } from 'react'
import './Cart.css'
import { CartContext } from '../context/CartContext';

function Cart() {

    const { cartValue, cartItems, removeFromCart, addQuantity, removeQuantity } = useContext(CartContext);
    return (
        <div className='cart'>
            <h1>Cart : ${cartValue}</h1>
            <div className="cart-cont">
                {cartItems.map(item => {
                    return (
                        <div className='cartitem'>
                            <img src={item.imgUrl} alt={item.name} style={{ height: "100px", width: "100px" }} />
                            <h3>{item.name}</h3>
                            <p>${item.price}</p>
                            <div style={{ marginLeft: "auto" }}>
                                <h3>Quantity</h3>
                                <div>
                                    <button onClick={() => addQuantity(item)}>+</button>
                                    {item.quantity}
                                    <button onClick={() => removeQuantity(item)}>-</button>
                                </div>
                                <br />
                                <button onClick={() => removeFromCart(item)}>Remove</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart