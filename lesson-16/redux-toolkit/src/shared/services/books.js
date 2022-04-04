import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/my-books",
})

export const getBooks = async ()=> {
    const {data} = await instance.get("/");
    return data;
}

export const addBook = async (data)=> {
    const {data: result} = await instance.post("/", data);
    return result;
}

export const removeBook = async (id)=> {
    const {data: result} = await instance.delete(`/${id}`);
    return result;
}

const services = {
    getBooks,
    addBook,
    removeBook
}

export default services;