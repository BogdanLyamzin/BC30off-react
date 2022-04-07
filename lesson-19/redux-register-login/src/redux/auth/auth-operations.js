import { createAsyncThunk } from "@reduxjs/toolkit";

import authAPI from "../../shared/api/authAPI";

export const signup = createAsyncThunk(
    "auth/signup",
    async(data, {rejectWithValue}) => {
        try {
            const result = await authAPI.signup(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    "auth/login",
    async (data, {rejectWithValue}) => {
        try {
            const result = await authAPI.login(data);
            return result;
        } catch (error) {
            return rejectWithValue(error);
        }
    }
)

export const logout = createAsyncThunk(
    "auth/logout",
    async (_, {rejectWithValue}) => {
        try {
            const result = await authAPI.logout();
            return result;
        } catch (error) {
            rejectWithValue(error);
        }
    }
);
