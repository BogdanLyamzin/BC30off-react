import {useState, useEffect} from "react";
import {useSelector, shallowEqual, useDispatch} from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";

import { login } from "../../redux/auth/auth-operations";

import { getIslogin } from "../../redux/auth/auth-selectors";

import { initialState } from "./initialState";

const LoginForm = ()=> {
    const [form, setForm] = useState({...initialState});
    const isLogin = useSelector(getIslogin, shallowEqual);

    const navigate = useNavigate();

    const location = useLocation();

    const dispatch = useDispatch();

    useEffect(()=> {
        if(isLogin) {
            const from = location.state?.from || "/my-books";
            navigate(from);
        }
    }, [isLogin]);

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(login(form));
        setForm({...initialState});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Email</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" required placeholder="Email" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input name="password" value={form.password} onChange={handleChange} type="password" required placeholder="Password" />
            </div>
            <div>
                <button type="submit">Login</button>
            </div>
        </form>
    )
};

export default LoginForm;