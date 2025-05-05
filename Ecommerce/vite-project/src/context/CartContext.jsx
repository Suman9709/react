import { createContext, useState } from "react";

export const CartContext = createContext(null);

export function CartProvider({ children }) {
    const [cartValue, setCartValue] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    function addToCart(item) {
        const exist = cartItems.some(val => val.id === item.id);

        if (exist) {
            alert("Item already in cart");
            return;
        }

        const newArr = [...cartItems, { ...item, quantity: 1 }];
        setCartItems(newArr);
        setCartValue(cartValue + item.price);
    }

    function removeFromCart(item) {
        setCartItems(cartItems.filter(val => {
            if (val.id != item.id)
                return true;

            return false;
        }))
        setCartValue(cartValue - item.price * item.quantity)
    }

    function addQuantity(item) {
        setCartItems(cartItems.map(val => {
            if (val.id === item.id)
                return { ...val, quantity: item.quantity + 1 };

            return { ...val };
        }));
        setCartValue(cartValue + item.price);
    }

    function removeQuantity(item) {
        if (item.quantity === 0) {
            alert("cant go beyond zero");
            return;
        }

        setCartItems(cartItems.map(val => {
            if (val.id === item.id)
                return { ...val, quantity: item.quantity - 1 };

            return { ...val };
        }));
        setCartValue(cartValue - item.price);
    }

    return (
        <CartContext.Provider value={{ cartItems, cartValue, addToCart, removeFromCart, addQuantity, removeQuantity }}>
            {children}
        </CartContext.Provider>

    )
}