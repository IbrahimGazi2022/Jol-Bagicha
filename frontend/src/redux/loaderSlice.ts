import { createSlice } from "@reduxjs/toolkit";

// INITIAL STATE - LOADER FALSE
const initialState = {
    isLoading: false
}

const loaderSlice = createSlice({
    name: "loader", // SLICE NAME
    initialState,
    reducers: {
        showLoader: (state) => {
            state.isLoading = true; // START LOADER
        },
        hideLoader: (state) => {
            state.isLoading = false; // STOP LOADER
        },
    },
});

export const { showLoader, hideLoader } = loaderSlice.actions;
export default loaderSlice.reducer;