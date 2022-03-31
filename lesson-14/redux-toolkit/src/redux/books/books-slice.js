import { createSlice, nanoid } from "@reduxjs/toolkit";

const booksSlice = createSlice({
    name: "books",
    initialState: [],
    reducers: {
        add: {
            reducer: (state, {payload}) => {
                state.push(payload);
            },
            prepare: (data) => {
                const newBook = {
                    ...data,
                    id: nanoid()
                };
                return {
                    payload: newBook
                }
            }
        },
        // add: (state, {payload}) => {
        //     const newBook = {
        //         ...payload,
        //         id: nanoid()
        //     }
        //     return [...state, newBook]
        // },
        remove: (state, {payload}) => {
            const newState = state.filter(item => item.id !== payload);
            return newState;
        }
    }
})

export const {actions} = booksSlice;

export default booksSlice.reducer;
