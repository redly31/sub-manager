import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import authReducer from './slices/authSlice'
import { subsApi } from "./api/subsApi";
import themeReducer from './slices/themeSlice'


export const store = configureStore({
    reducer: {
        [subsApi.reducerPath]: subsApi.reducer,
        theme: themeReducer,
        auth: authReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(subsApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch