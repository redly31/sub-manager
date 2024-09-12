import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
    name: 'auth',
    initialState: {
        isAuth: true as boolean,
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




