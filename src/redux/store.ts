import { configureStore } from "@reduxjs/toolkit";
import loaderReducer from "./loaderSlice";

export const store = configureStore({
    reducer: {
        loader: loaderReducer
    }
})

// store থেকে type derive করছি — future use এর জন্য
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;