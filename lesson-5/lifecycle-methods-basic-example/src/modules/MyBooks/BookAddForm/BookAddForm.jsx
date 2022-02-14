import { Component } from "react";

import "./book-add-form.css"

class BookAddForm extends Component {
    state = {
        title: "",
        author: "",
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.props.onSubmit(this.state);
        this.resetForm()
    }

    handleChange = (e)=> {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    resetForm(){
        this.setState({
            title: "",
            author: ""
        });
    }

    render() {
        const {title, author} = this.state;
        const {handleChange, handleSubmit} = this;

        return (
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="" className="form-group-label">Название книги</label>
                    <input value={title} required name="title" onChange={handleChange} type="text" className="form-group-input" placeholder="Название книги" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-group-label">Автор</label>
                    <input value={author} required name="author" onChange={handleChange} type="text" className="form-group-input" placeholder="Автор книги" />
                </div>
                <div className="form-group">
                    <label htmlFor="" className="form-group-label"></label>
                    <button type="submit">Добавить</button>
                </div>
            </form>
        )

    }
}

export default BookAddForm;