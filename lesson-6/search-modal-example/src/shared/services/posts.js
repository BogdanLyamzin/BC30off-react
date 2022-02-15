import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/posts",
    params: {
        "_limit": 10
    }
})

export const searchPosts = async (_page = 1, q = "") => {
    const {data} = await instance.get("/", {
        params: {
            _page,
            q
        }
    });
    return data;
}

export const getPosts = async (_page = 1) => {
    const {data} = await instance.get("/", {
        params: {
            _page,
        }
    });
    return data;
}