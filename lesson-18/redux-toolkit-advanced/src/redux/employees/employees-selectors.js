export const getAllEmployees = ({employees}) => employees.items;

export const getAllManagers = store => {
    const employees = getAllEmployees(store);
    const managers = employees.filter(item => item.position === "manager");
     return managers;
}