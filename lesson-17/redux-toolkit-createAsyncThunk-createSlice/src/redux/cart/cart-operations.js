import { createAsyncThunk } from "@reduxjs/toolkit";

import cartAPI from "../../shared/api/cartAPI";

export const fetchCart = createAsyncThunk(
    "cart/fetchCart",
    async (_, {rejectWithValue}) => {
        try {
            const result = await cartAPI.getCart();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addToCart = createAsyncThunk(
    "cart/addToCart",
    async (data, {rejectWithValue}) => {
        try {
            const {id, ...cartItem} = data;
            const result = await cartAPI.addToCart(cartItem);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const removeFromCart = createAsyncThunk(
    "cart/removeFromCart",
    async (id, {rejectWithValue}) => {
        try {
            await cartAPI.removeFromCart(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

const operations = {
    fetchCart,
    addToCart,
    removeFromCart
}

export default operations;