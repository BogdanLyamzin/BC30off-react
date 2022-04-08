import {createSlice} from "@reduxjs/toolkit";

import {fetchBooks, addBook, removeBook} from "./books-operations";

const initialState = {
    items: [],
    loading: true,
    error: null
};

const booksSlice = createSlice({
    name: "books",
    initialState,
    extraReducers: {
        [fetchBooks.pending]: (state)=> {
            state.loading = true
        },
        [fetchBooks.fulfilled]: (state, {payload}) => {
            state.items = [...payload];
            state.loading = false;
            state.error = null;
        },
        [fetchBooks.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [addBook.pending]: (state) => {
            state.loading = true;
        },
        [addBook.fulfilled]: (state, {payload}) => {
            state.items.push(payload);
            state.loading = false;
            state.error = null;
        },
        [addBook.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [removeBook.pending]: (state) => {
            state.loading = true;
        },
        [removeBook.fulfilled]: (state, {payload}) => {
            state.items = state.items.filter(item => item._id !== payload);
            state.loading = false;
            state.error = null;
        },
        [removeBook.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        }
    }
});

export default booksSlice.reducer;