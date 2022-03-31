import types from "./books-types";

const initialState = [];

const reducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case types.add:
            return  [...state, payload];

        case types.remove:
            const newBooks = state.books.filter(item => item.id !== payload);
            return  newBooks;

        default:
            return state;
    }
}

export default reducer;