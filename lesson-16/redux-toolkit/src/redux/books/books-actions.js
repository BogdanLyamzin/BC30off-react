import {createAction} from "@reduxjs/toolkit";

const fetchRequest = createAction("books/fetchRequest");
const fetchSuccess = createAction("books/fetchSuccess");
const fetchError = createAction("books/fetchError");

const addRequest = createAction("books/addRequest");
const addSuccess = createAction("books/addSuccess");
const addError = createAction("books/addError");

const removeRequest = createAction("books/removeRequest");
const removeSuccess = createAction("books/removeSuccess");
const removeError = createAction("books/removeError");

const actions = {
    fetchRequest,
    fetchSuccess,
    fetchError,

    addRequest,
    addSuccess,
    addError,
    
    removeRequest,
    removeSuccess,
    removeError
}

export default actions;