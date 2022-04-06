import { useEffect } from "react";
import {useSelector, shallowEqual, useDispatch} from "react-redux";

import EmployeesTable from "../../client/EmployeesTable";

import operations from "../../redux/employees/employees-operations";
import {getAllManagers} from "../../redux/employees/employees-selectors";

import styles from "./managers.module.css";

const ManagersPage = ()=> {
    const managers = useSelector(getAllManagers, shallowEqual);

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(operations.fetchEmployees())
    }, [dispatch])
    
    return (
        <main>
            <div className="container">
                <h2 className="page-title">Managers Page</h2>
                <EmployeesTable items={managers} />
            </div>
        </main>
    )
}

export default ManagersPage;