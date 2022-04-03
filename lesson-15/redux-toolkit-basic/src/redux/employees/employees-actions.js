import { createAction, nanoid } from "@reduxjs/toolkit";

const add = createAction("employees/add", (data)=> {
    const newEmployee = {
        ...data,
        id: nanoid()
    };

    return {
        payload: newEmployee
    }
});

const remove = createAction("employees/remove");

const actions = {
    add,
    remove
};

export default actions;