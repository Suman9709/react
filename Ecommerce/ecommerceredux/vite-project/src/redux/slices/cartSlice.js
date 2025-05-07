import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        value: 0,
        items: []
    },
    reducers: {
        addToCart: function (state, action) {
            const exists = state.items.some(val => val.id === action.payload.id);
            if (exists) {
                alert("item already in cart");
                return;
            }

            state.items.push({ ...action.payload, quantity: 1 });
            state.value += action.payload.price;
        },
        removeFromCart: function (state, action) {
            state.items = state.items.filter(val => val.id !== action.payload.id);
            state.value -= action.payload.price * action.payload.quantity;
        },
        addQuantity: function (state, action) {
            state.items = state.items.map(val => {
                if (val.id === action.payload.id)
                    return { ...val, quantity: action.payload.quantity + 1 };

                return { ...val };
            })
            state.value += action.payload.price;
        },
        removeQuantity: function (state, action) {
            if(action.payload.quantity === 0)
            {
                alert("cant go beyond zero");
                return;
            }
            state.items = state.items.map(val => {
                if (val.id === action.payload.id)
                    return { ...val, quantity: action.payload.quantity - 1 };

                return { ...val };
            })
            state.value -= action.payload.price;
        }
    }
});

export const{addToCart,addQuantity,removeFromCart,removeQuantity} = cartSlice.actions;
export default cartSlice.reducer;