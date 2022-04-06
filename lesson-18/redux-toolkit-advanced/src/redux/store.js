import { configureStore } from "@reduxjs/toolkit";

import employeesReducer from "./employees/employees-slice";

const store = configureStore({
    reducer: {
        employees: employeesReducer
    }
})

export default store;