import axios from "axios";

const instance = axios.create({
    baseURL: "https://624c075f44505084bc58381a.mockapi.io/api/v1/employees",
});

export const getEmployees = async ()=> {
    const {data} = await instance.get("/");
    return data;
}

export const addEmployee = async (data) => {
    const {data: result} = await instance.post("/", data);
    return result;
}

export const removeEmployee = async (id) => {
    const {data: result} = await instance.delete(`/${id}`);
    return result;
}


