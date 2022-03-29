import { nanoid } from "nanoid";

const initialState = {
    books: [
        {
            id: nanoid(),
            title: "Второй Апокалипсис",
            author: "Скотт Беккер"
        },
        {
            id: nanoid(),
            title: "Worm",
            author: "Джон Маккрей"
        }
    ]
};

const reducer = (state = initialState, payload)=> {
    return state;
}

export default reducer;