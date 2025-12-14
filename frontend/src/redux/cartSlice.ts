import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CartItem {
    id: number;
    title: string;
    price: number;
    img: string;
    quantity: number;
}

interface CartState {
    items: CartItem[];
    totalQuantity: number;
}

const initialState: CartState = {
    items: [],
    totalQuantity: 0,
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // ADD TO CART
        addToCart: (state, action: PayloadAction<CartItem>) => {
            const existingItem = state.items.find(item => item.id === action.payload.id);
            if (existingItem) {
                existingItem.quantity += action.payload.quantity;
            } else {
                state.items.push(action.payload);
            }
            state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
        },

        // REMOVE TO CART
        removeFromCart: (state, action: PayloadAction<number>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
        },

        // UPDATE CART QUANTITY
        updateQuantity: (
            state,
            action: PayloadAction<{ id: number; type: "increase" | "decrease" }>
        ) => {
            const item = state.items.find(i => i.id === action.payload.id);
            if (item) {
                if (action.payload.type === "increase") {
                    item.quantity += 1;
                } else if (action.payload.type === "decrease" && item.quantity > 1) {
                    item.quantity -= 1;
                }
            }
            state.totalQuantity = state.items.reduce((sum, item) => sum + item.quantity, 0);
        },

        // CLEAR CART
        clearCart: (state) => {
            state.items = [];
            state.totalQuantity = 0;
        },
    }
})

export const { addToCart, removeFromCart, updateQuantity, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
