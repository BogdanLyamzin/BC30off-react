import { useEffect } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";

import operations from "../../redux/employees/employees-operations";

import FormAddEmplyees from "../../client/FormAddEmployees";
import EmployeesTable from "../../client/EmployeesTable";

import {getAllEmployees} from "../../redux/employees/employees-selectors";

import styles from "./employees.module.css";

const EmployeesPage = ()=> {
    const employees = useSelector(getAllEmployees, shallowEqual);

    const dispatch = useDispatch();
    
    useEffect(() => {
      dispatch(operations.fetchEmployees());
    }, [dispatch])
    
    const addEmployee = (data) => dispatch(operations.addEmployee(data));

    const removeEmployee = (id) => dispatch(operations.removeEmployee(id));

    return (
        <main>
            <div className="container">
                <h2 className="page-title">Employees Page</h2>
                <FormAddEmplyees onSubmit={addEmployee} />
                {Boolean(employees.length) && 
                    <EmployeesTable items={employees} deleteCallback={removeEmployee} />}
            </div>
        </main>
    )
}

export default EmployeesPage;