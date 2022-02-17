import { useState } from "react";

export const useForm = (initialState, onSubmit)=> {
    const [form, setForm] = useState({...initialState});

    const handleChange = ({target}) => {
        const {name, value} = target;
        setForm({
            ...form,
            [name]: value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        setForm({...initialState})
    }

    return [form, handleChange, handleSubmit];
}

