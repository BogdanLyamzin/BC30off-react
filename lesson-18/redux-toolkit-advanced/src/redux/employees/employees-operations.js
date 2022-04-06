import { createAsyncThunk } from "@reduxjs/toolkit";

import * as employeesAPI from "../../shared/api/employeesAPI";

export const fetchEmployees = createAsyncThunk(
    "employees/fetchEmployees",
    async (_, {rejectWithValue}) => {
        try {
            const result = await employeesAPI.getEmployees();
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const addEmployee = createAsyncThunk(
    "employees/addEmployee",
    async (data, {rejectWithValue}) => {
        try {
            const result = await employeesAPI.addEmployee(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const removeEmployee = createAsyncThunk(
    "employees/removeEmployee",
    async (id, {rejectWithValue}) => {
        try {
            const result = await employeesAPI.removeEmployee(id);
            return result.id;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

const operations = {
    fetchEmployees,
    addEmployee,
    removeEmployee
};

export default operations;