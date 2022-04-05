import { createSlice } from "@reduxjs/toolkit";

import {fetchCart, addToCart, removeFromCart} from "./cart-operations";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const cartSlice = createSlice({
    name: "cart",
    initialState,
    extraReducers: {
        [fetchCart.pending]: (state) => {
            state.loading = true
        },
        [fetchCart.fulfilled]: (state, {payload}) => {
            state.items = [...payload];
            state.loading = false;
            state.error = null;
        },
        [fetchCart.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [addToCart.pending]: (state) => {
            state.loading = true
        },
        [addToCart.fulfilled]: (state, {payload}) => {
            state.items.push(payload);
            state.loading = false;
            state.error = null;
        },
        [addToCart.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [removeFromCart.pending]: (state) => {
            state.loading = true
        },
        [removeFromCart.fulfilled]: (state, {payload}) => {
            state.items = state.items.filter(item => item.id !== payload);
            state.loading = false;
            state.error = null;
        },
        [removeFromCart.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        }
    }
})

export default cartSlice.reducer;