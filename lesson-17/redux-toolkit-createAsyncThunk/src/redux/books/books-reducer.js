import {createReducer, combineReducers} from "@reduxjs/toolkit";

import operations from "./books-operations";

const items = createReducer([], {
    [operations.fetchBooks.fulfilled]: (state, {payload}) => [...payload],
    [operations.addBook.fulfilled]: (state, {payload}) => [...state, payload],
    [operations.removeBook.fulfilled]: (state, {payload}) => state.filter(item => item.id !== payload)
});

const loading = createReducer(false, {
    [operations.fetchBooks.pending]: () => true,
    [operations.fetchBooks.fulfilled]: () => false,
    [operations.fetchBooks.rejected]: () => false,
    [operations.addBook.pending]: () => true,
    [operations.addBook.fulfilled]: () => false,
    [operations.addBook.rejected]: () => false,
    [operations.removeBook.pending]: () => true,
    [operations.removeBook.fulfilled]: () => false,
    [operations.removeBook.rejected]: () => false,
});

const error = createReducer(null, {
    [operations.fetchBooks.rejected]: (_, {payload}) => payload,
    [operations.addBook.rejected]: (_, {payload}) => payload,
    [operations.removeBook.rejected]: (_, {payload}) => payload,
});

const booksReducer = combineReducers({
    items,
    loading,
    error
})

export default booksReducer;