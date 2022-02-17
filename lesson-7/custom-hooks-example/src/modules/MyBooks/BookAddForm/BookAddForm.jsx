import PropTypes from "prop-types";

import TextField from "../../../shared/components/TextField";

import { useForm } from "../../../shared/hooks/useForm";

import "./book-add-form.css"

import { initialState } from "./initialState";
import { fields } from "./fields";

const BookAddForm = ({onSubmit}) => {
    const [form, handleChange, handleSubmit] = useForm(initialState, onSubmit)

    return (
        <form onSubmit={handleSubmit}>
            <TextField {...fields.title} value={form.title}  onChange={handleChange} />
            {/* <TextField label="Название книги" name="title" value={form.title}  onChange={handleChange} placeholder="Название книги" required={true} /> */}
            {/* <div className="form-group">
                <label htmlFor="" className="form-group-label">Название книги</label>
                <input value={form.title} onChange={handleChange} required name="title"  type="text" className="form-group-input" placeholder="Название книги" />
            </div> */}
            <TextField {...fields.author} value={form.author}  onChange={handleChange} />
             {/* <TextField label="Автор" name="author" value={form.author}  onChange={handleChange} placeholder="Автор" required={true} /> */}
            {/* <div className="form-group">
                <label htmlFor="" className="form-group-label">Автор</label>
                <input value={form.author} onChange={handleChange} required name="author"  type="text" className="form-group-input" placeholder="Автор книги" />
            </div> */}
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