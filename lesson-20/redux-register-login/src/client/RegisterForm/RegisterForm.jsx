import {useState} from "react";
import {useDispatch} from "react-redux";

import { signup } from "../../redux/auth/auth-operations";

import { initialState } from "./initialState";

const RegisterForm = ()=> {
    const [form, setForm] = useState({...initialState});

    const dispatch = useDispatch();

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }))
    };

    const handleSubmit = (e)=> {
        e.preventDefault();
        dispatch(signup(form));
        setForm({...initialState});
    }

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="">Name</label>
                <input name="name" value={form.name} onChange={handleChange} type="text" required placeholder="Name" />
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input name="email" value={form.email} onChange={handleChange} type="email" required placeholder="Email" />
            </div>
            <div>
                <label htmlFor="">Password</label>
                <input name="password" value={form.password} onChange={handleChange} type="password" required placeholder="Password" />
            </div>
            <div>
                <button type="submit">Register</button>
            </div>
        </form>
    )
};

export default RegisterForm;