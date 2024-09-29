import { createSlice } from "@reduxjs/toolkit";

const sessionSlice = createSlice({
    name: 'auth',
    initialState: {
        session: false as boolean,
    },
    reducers: {
        logIn(state) {
            state.session = true
        },
        logOut(state) {
            state.session = false
        }
    }
})

export const { logIn, logOut } = sessionSlice.actions
export default sessionSlice.reducer




