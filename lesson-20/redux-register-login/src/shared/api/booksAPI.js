import axios from "axios";

// import { instance } from "./authAPI";

export const getBooks = async ()=> {
    const {data} = await axios.get("/books");
    return data;
}

export const addBook = async (data)=> {
    const {data: result} = await axios.post("/books", data);
    return result;
}

export const removeBook = async (id)=> {
    const {data: result} = await axios.delete(`/books/${id}`);
    return result;
}

const API = {
    getBooks,
    addBook,
    removeBook
}

export default API;