import axios from "axios";

const instance = axios.create({
    baseURL: "http://localhost:4000/products",
})

export const getProducts = async (_page = 1, _limit = 3)=> {
    const {data} = await instance.get("/", {
        params: {
            _page, _limit
        }
    });
    return data;
}

export const getSingleProduct = async id => {
    const {data} = await instance.get(`/${id}`);
    return data;
}