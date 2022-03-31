import { combineReducers } from "redux";

import booksReducer from "./books/books-reducer";
import cartReducer from "./cart/cart-reducer";

const rootReducer = combineReducers({
    books: booksReducer,
    cart: cartReducer
});

export default rootReducer;