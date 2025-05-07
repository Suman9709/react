import { createSlice } from "@reduxjs/toolkit";

const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: 5
    },
    reducers: {
        increament: function (state, action) {
            state.value += action.payload;
        },
        decreament: function (state, action) {
            state.value -= action.payload;
        }
    }
});

export const { increament, decreament } = counterSlice.actions;
export default counterSlice.reducer;