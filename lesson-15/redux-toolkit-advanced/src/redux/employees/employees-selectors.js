export const getAllEmployees = store => store.employees;

export const getAllManagers = store => {
    const employees = getAllEmployees(store);
    return employees.filter(item => item.position === "manager");
}