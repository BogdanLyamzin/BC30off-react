import { nanoid } from "nanoid";

export const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Home"
    },
    {
        id: nanoid(),
        to: "/employees",
        text: "EmployeesPage"
    },
    {
        id: nanoid(),
        to: "/managers",
        text: "Managers"
    }
]