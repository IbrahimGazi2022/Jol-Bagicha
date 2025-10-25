import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderSlice";
import cartReducer from "./cartSlice";

export const store = configureStore({
    reducer: {
        loader: loaderReducer,
        cart: cartReducer
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;