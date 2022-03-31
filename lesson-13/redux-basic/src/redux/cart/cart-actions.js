import types from "./cart-types";

const add = (payload) => {
    return {
        type: types.add,
        payload
    }
}

const remove = (id) => {
    return {
        type: types.remove,
        payload: id
    }
}

const actions = {
    add,
    remove
}

export default actions;