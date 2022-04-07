import { useState } from "react";
import PropTypes from "prop-types";

import "./book-add-form.css";

import { initialState } from "./initialState";

const BookAddForm = ({onSubmit}) => {
    const [form, setForm] = useState({...initialState});

    const handleChange = ({target}) => {
        const {name, value, type, checked} = target;
        const newValue = type === "checkbox" ? checked : value;
        setForm({
            ...form,
            [name]: newValue
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(form);
        setForm({...initialState})
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label htmlFor="" className="form-group-label">Название книги</label>
                <input value={form.title} onChange={handleChange} required name="title"  type="text" className="form-group-input" placeholder="Название книги" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-group-label">Автор</label>
                <input value={form.author} onChange={handleChange} required name="author"  type="text" className="form-group-input" placeholder="Автор книги" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-group-label">Любимая</label>
                <input checked={form.favorite} onChange={handleChange} name="favorite"  type="checkbox" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-group-label"></label>
                <button type="submit">Добавить</button>
            </div>
        </form>
    )
}

BookAddForm.propTypes = {
    onSubmit: PropTypes.func.isRequired
}

export default BookAddForm;