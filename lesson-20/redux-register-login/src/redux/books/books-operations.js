import { createAsyncThunk } from "@reduxjs/toolkit";

import booksAPI from "../../shared/api/booksAPI";

export const fetchBooks = createAsyncThunk(
    "books/fetchBooks",
    async (_, {rejectWithValue}) => {
        try {
            const result = await booksAPI.getBooks();
            return result;
        }
        catch(error) {
            return rejectWithValue(error)
        }
    }
);

/*
export const fetchBooks = ()=> {
    const func = async (dispatch) => {
        dispatch(actions.fetchRequest());
        try {
            const result = await booksAPI.getBooks();
            dispatch(actions.fetchSuccess(result));
        } catch (error) {
            dispatch(actions.fetchError(error));
        }
    }

    return func;
}
*/
export const addBook = createAsyncThunk(
    "books/addBook",
    async (data, {rejectWithValue}) => {
        try {
            const result = await booksAPI.addBook(data);
            return result;            
        } catch (error) {
            rejectWithValue(error);
        }
    },
    {
        condition: (data, {getState}) => {
            const {books} = getState();
            const {title, author} = data;
            const titleCompare = title.toLowerCase();
            const authorCompare = author.toLowerCase();
            const result = books.items.find(({title, author}) => {
                return (title.toLowerCase() === titleCompare && author.toLowerCase() === authorCompare);
            });
            if(result){
                alert("This book already exist!");
                return false;
            }            
        }
    }
)
/*
export const add = data => {
    const func = async(dispatch, getState) => {
        const {books} = getState();
        const {title, author} = data;
        const titleCompare = title.toLowerCase();
        const authorCompare = author.toLowerCase();
        const result = books.items.find(({title, author}) => {
            return (title.toLowerCase() === titleCompare && author.toLowerCase() === authorCompare);
        });
        if(result){
            alert("This book already exist!");
            return;
        }
        dispatch(actions.addRequest());
        try {
            const newBook = await booksAPI.addBook(data);
            dispatch(actions.addSuccess(newBook));
        }
        catch(error){
            dispatch(actions.addError(error));
        }
    };

    return func;
}
*/
export const removeBook = createAsyncThunk(
    "books/removeBook",
    async (id, {rejectWithValue}) =>{
        try {
            await booksAPI.removeBook(id);
            return id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)
/*
export const remove = id => {
    const func = async (dispatch) => {
        dispatch(actions.removeRequest());
        try {
            await booksAPI.removeBook(id);
            dispatch(actions.removeSuccess(id));
        }
        catch(error){
            dispatch(actions.removeError())
        }
    };

    return func;
}
*/
const operations = {
    fetchBooks,
    addBook,
    removeBook
}

export default operations;