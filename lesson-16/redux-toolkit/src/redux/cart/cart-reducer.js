import { createReducer } from "@reduxjs/toolkit";

import actions from "./cart-actions";

const initialState = [];

const cartReducer = createReducer(initialState, {
    [actions.add]: (state, action) => {
        state.push(action.payload)
    },
    [actions.remove]: (state, {payload}) => {
        const newCart = state.filter(item => item.id !== payload);
        return newCart;
    }
})

// const cartReducer = (state = initialState, {type, payload}) => {
//     switch(type) {
//         case actions.add.type:
//             return [...state, payload];
//         case actions.remove.type: 
//             const newCart = state.filter(item => item.id !== payload);
//             return newCart;
//         default: 
//             return state;
//     }
// }

export default cartReducer;