import types from "./cart-types";

const initialState = [];

const cartReducer = (state = initialState, {type, payload}) => {
    switch(type) {
        case types.add:
            return [...state, payload];
        case types.remove: 
            const newCart = state.filter(item => item.id !== payload);
            return newCart;
        default: 
            return state;
    }
}

export default cartReducer;