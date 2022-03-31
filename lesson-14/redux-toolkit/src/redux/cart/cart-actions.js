import { createAction } from "@reduxjs/toolkit";
// import types from "./cart-types";

const add = createAction("cart/add");

// const add = (payload) => {
//     return {
//         type: types.add,
//         payload
//     }
// }

const remove = createAction("cart/remove");
// const remove = (id) => {
//     return {
//         type: types.remove,
//         payload: id
//     }
// }

const actions = {
    add,
    remove
}

export default actions;