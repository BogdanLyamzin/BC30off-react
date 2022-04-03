import {createSlice, nanoid} from "@reduxjs/toolkit";

const employeesSlice = createSlice({
    name: "employees",
    initialState: [],
    reducers: {
        add: {
            reducer: (state, {payload}) => {
                state.push(payload);
            },
            prepare: (data) => {
                const newEmployee = {
                    ...data, 
                    id: nanoid()
                };
                return {
                    payload: newEmployee
                }
            }
        },
        remove: (state, {payload}) => state.filter(item => item.id !== payload)
    }
});

export const {actions} = employeesSlice;

export default employeesSlice.reducer;