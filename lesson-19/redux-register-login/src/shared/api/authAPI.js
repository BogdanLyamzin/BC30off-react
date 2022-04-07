import axios from "axios";

axios.defaults.baseURL = "https://auth-backend-lesson.herokuapp.com/api";

// export const instance = axios.create({
//     baseURL: "https://auth-backend-lesson.herokuapp.com/api"
// });

const signup = async (data)=> {
    const {data: result} = await axios.post("/users/signup", data);
    axios.defaults.headers.common.Authorization = `Bearer ${result.token}`;
    // instance.defaults.headers.common.Authorization = result.token;
    return result;
}

const login = async (data) => {
    const {data: result} = await axios.post("/users/login", data);
    axios.defaults.headers.common.Authorization = `Bearer ${result.token}`;
    // instance.defaults.headers.common.Authorization = result.token;
    return result;
}

const logout = async () => {
    const {data: result} = await axios.post("/users/logout");
    return result;
}

const authAPI = {
    signup,
    login,
    logout
};

export default authAPI;