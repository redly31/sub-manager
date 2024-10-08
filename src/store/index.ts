import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import sessionReducer from "./slices/sessionSlice";
import { subsApi } from "./api/subsApi";
import themeReducer from "./slices/themeSlice";
import { patternsApi } from "./api/patternsApi";

export const store = configureStore({
  reducer: {
    [subsApi.reducerPath]: subsApi.reducer,
    [patternsApi.reducerPath]: patternsApi.reducer,
    theme: themeReducer,
    auth: sessionReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      subsApi.middleware,
      patternsApi.middleware,
    ),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
