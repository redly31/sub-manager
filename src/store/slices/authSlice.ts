import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'pizzaInCart',
    initialState: {
        isAuth: false as boolean,
    },
    reducers: {
        logIn(state) {
            state.isAuth = true
        },
        logOut(state) {
            state.isAuth = false
        }
    }
})

export const { logIn, logOut } = authSlice.actions
export default authSlice.reducer




