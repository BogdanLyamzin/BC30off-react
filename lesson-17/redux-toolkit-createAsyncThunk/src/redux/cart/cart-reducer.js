import { createReducer, combineReducers } from "@reduxjs/toolkit";

import {fetchCart, addToCart, removeFromCart} from "./cart-operations";

const items = createReducer([], {
    [fetchCart.fulfilled]: (state, {payload}) => [...state, payload],
    [addToCart.fulfilled]: (state, {payload}) => [...state, payload],
    [removeFromCart.fulfilled]: (state, {payload}) => state.filter(item => item.id !== payload)
});

const loading = createReducer(false, {
    [fetchCart.pending]: () => true,
    [fetchCart.fulfilled]: () => false,
    [fetchCart.rejected]: () => false,
    [addToCart.pending]: () => true,
    [addToCart.fulfilled]: () => false,
    [addToCart.rejected]: () => false,
    [removeFromCart.pending]: () => true,
    [removeFromCart.fulfilled]: () => false,
    [removeFromCart.rejected]: () => false,
});

const error = createReducer(null, {
    [fetchCart.rejected]: (_, {payload}) => payload,
    [addToCart.rejected]: (_, {payload}) => payload,
    [removeFromCart.rejected]: (_, {payload}) => payload
});

const cartReducer = combineReducers({
    items,
    loading,
    error
});

export default cartReducer;