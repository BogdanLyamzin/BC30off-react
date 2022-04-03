import {useSelector, shallowEqual} from "react-redux";

import EmployeesTable from "../../client/EmployeesTable";

import {getAllManagers} from "../../redux/employees/employees-selectors";

import styles from "./managers.module.css";

const ManagersPage = ()=> {
    const managers = useSelector(getAllManagers, shallowEqual);
    
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