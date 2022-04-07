import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./auth/auth-slice";
import booksReducer from "./books/books-slice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        books: booksReducer,
    }
})

export default store;