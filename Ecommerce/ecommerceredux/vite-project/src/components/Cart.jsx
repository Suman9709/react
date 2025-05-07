import React, { useContext } from 'react'
import './Cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, addQuantity, removeQuantity } from '../redux/slices/cartSlice';

function Cart() {
    const cartValue = useSelector(state => state.cart.value);
    const cartItems = useSelector(state => state.cart.items);
    const dispatcher = useDispatch();
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
                                    <button onClick={() => dispatcher(addQuantity(item))}>+</button>
                                    {item.quantity}
                                    <button onClick={() => dispatcher(removeQuantity(item))}>-</button>
                                </div>
                                <br />
                                <button onClick={() => dispatcher(removeFromCart(item))}>Remove</button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Cart