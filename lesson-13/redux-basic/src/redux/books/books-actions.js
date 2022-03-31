import { nanoid } from "nanoid";

import types from "./books-types";

const add = (payload)=> {
    return {
        type: types.add,
        payload: {
            ...payload,
            id: nanoid()
        }
    }
}

const remove = (payload) => {
    return {
        type: types.remove,
        payload
    }
}

const actions = {
    add,
    remove
}

export default actions;