import { nanoid } from "nanoid"
export const items = [
    {
        id: nanoid(),
        to: "/",
        text: "Home"
    },
    {
        id: nanoid(),
        to: "/products",
        text: "Products"
    },
    {
        id: nanoid(),
        to: "/contacts",
        text: "Contacts"
    }    
]