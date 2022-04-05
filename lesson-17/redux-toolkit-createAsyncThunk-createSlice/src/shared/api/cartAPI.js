import axios from "axios";

const instance = axios.create({
    baseURL: "https://624c075f44505084bc58381a.mockapi.io/api/v1/cart"
});

export const getCart = async ()=> {
    const {data} = await instance.get("/");
    return data;
}

export const addToCart = async (data) => {
    const {data: result} = await instance.post("/", data);
    return result;
}

export const removeFromCart = async (id) => {
    const {data: result} = await instance.delete(`/${id}`);
    return result;
}

const API = {
    getCart,
    addToCart,
    removeFromCart
};

export default API;