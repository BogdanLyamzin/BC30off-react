import {Navigate, Route, Routes} from "react-router-dom";

import LayoutPage from "./client/LayoutPage";

import HomePage from "./pages/HomePage";
import EmployeesPage from "./pages/EmployeesPage";
import ManagersPage from "./pages/ManagersPage";

const MyRoutes = ()=> {
    return (
        <Routes>
            <Route path="/" element={<LayoutPage />}>
                <Route index element={<HomePage />} />
                <Route path="employees" element={<EmployeesPage />} />
                <Route path="managers" element={<ManagersPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default MyRoutes;