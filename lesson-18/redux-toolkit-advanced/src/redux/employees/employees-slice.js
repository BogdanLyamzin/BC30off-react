import {createSlice} from "@reduxjs/toolkit";

import { fetchEmployees, addEmployee, removeEmployee } from "./employees-operations";

const initialState = {
    items: [],
    loading: false,
    error: null
};

const employeesSlice = createSlice({
    name: "employees",
    initialState,
    extraReducers: {
        [fetchEmployees.pending]: (state) =>{
            state.loading = true;
            state.error = null;
        },
        [fetchEmployees.fulfilled]: (state, {payload}) => {
            state.items = [...payload];
            state.loading = false;
        },
        [fetchEmployees.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [addEmployee.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [addEmployee.fulfilled]: (state, {payload}) => {
            state.items.push(payload);
            state.loading = false;
        },
        [addEmployee.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        },
        [removeEmployee.pending]: (state) => {
            state.loading = true;
            state.error = null;
        },
        [removeEmployee.fulfilled]: (state, {payload}) => {
            state.items = state.items.filter(item => item.id !== payload);
            state.loading = false;
        },
        [removeEmployee.rejected]: (state, {payload}) => {
            state.loading = false;
            state.error = payload;
        }
    }
});

export default employeesSlice.reducer;