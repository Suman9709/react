import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: "user",
    initialState: {
        username: null
    },
    reducers: {
        login: function (state, action) {
            alert("this is working");
            state.username = action.payload;
        },
        logout: function (state, action) {
            state.username = null;
        }
    }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;