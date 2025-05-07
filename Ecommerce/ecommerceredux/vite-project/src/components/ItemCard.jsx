import React from 'react'
import './Card.css'
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/cartSlice';

function ItemCard({ item }) {
    const dispatcher = useDispatch();
    return (
        <div key={item.id} className="product">
            <img src={item.imgUrl} alt={item.name} style={{ height: "100px", width: "100px" }} />
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <button onClick={() => dispatcher(addToCart(item))}>Add to Cart</button>
        </div>
    )
}

export default ItemCard
