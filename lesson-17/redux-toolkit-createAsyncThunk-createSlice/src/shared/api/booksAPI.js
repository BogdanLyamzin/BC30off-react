import axios from "axios";

const instance = axios.create({
    baseURL: "https://624c075f44505084bc58381a.mockapi.io/api/v1/books",
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

const API = {
    getBooks,
    addBook,
    removeBook
}

export default API;