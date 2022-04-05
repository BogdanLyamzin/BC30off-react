import {createReducer, combineReducers} from "@reduxjs/toolkit";

import actions from "./books-actions";

const items = createReducer([], {
    [actions.fetchSuccess]: (_, {payload}) => [...payload],
    [actions.addSuccess]: (state, {payload}) => [...state, payload],
    [actions.removeSuccess]: (state, {payload}) => state.filter(item => item.id !== payload)
});

const loading = createReducer(false, {
    [actions.fetchRequest]: () => true,
    [actions.fetchSuccess]: () => false,
    [actions.fetchError]: () => false,
    [actions.addRequest]: () => true,
    [actions.addSuccess]: () => false,
    [actions.addError]: () => false,
    [actions.removeRequest]: () => true,
    [actions.removeSuccess]: () => false,
    [actions.removeError]: () => false,
});

const error = createReducer(null, {
    [actions.fetchError]: (_, {payload}) => payload,
    [actions.addError]: (_, {payload}) => payload,
    [actions.removeError]: (_, {payload}) => payload,
})

// const booksReducer = createReducer(initialState, {

//     [actions.addSuccess]: (state, {payload}) => {
//         state.items.push(payload);
//         state.loading = false;
//         state.error = null;
//     },
//     [actions.addError]: (state, {payload}) => {
//         state.loading = false;
//         state.error = payload;
//     },
//     [actions.removeRequest]: (state) => {
//         state.loading = true
//     },
//     [actions.removeSuccess]: (state, {payload}) => {
//         const result = state.items.filter(item => item.id !== payload);
//         return {...state, items: result, loading: false};
//     },
//     [actions.removeError]: (state, {payload}) => {
//         state.loading = false;
//         state.error = payload;
//     }
// })

const booksReducer = combineReducers({
    items,
    loading,
    error
})

export default booksReducer;