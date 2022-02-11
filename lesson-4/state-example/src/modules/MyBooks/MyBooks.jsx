import {Component} from "react";
import {nanoid} from "nanoid";

import "./my-books.css";

class MyBooks extends Component{
    state = {
        title: "",
        author: "",
        items: [],
        filter: ""
    }

    handleChange = (e)=> {
        const {name, value} = e.target;
        this.setState({
            [name]: value
        })
    }

    handleSubmit = (e)=> {
        e.preventDefault();
        this.addBook();
        this.resetForm()
    }

    resetForm(){
        this.setState({
            title: "",
            author: ""
        });
    }

    addBook () {
        const {title, items} = this.state;
        const result = items.find(item => item.title === title);
        if(result) {
            alert(`${title} уже есть в списке`);
            return;
        }
        this.setState(prevState => {
            const {items, title, author} = prevState;
            const newBook = {
                title,
                author,
                id: nanoid()
            };
            // const newItems = [...items, newBook]
            return {
                items: [...items, newBook],
                // items: newItems
            }
        })
    }

    removeBook = (bookId)=> {
        this.setState(prevState => {
            const {items} = prevState;
            const newItems = items.filter(item => item.id !== bookId);
            // const newItems = [...items];
            // const idx = newItems.findIndex(item => item.id === bookId)
            // newItems.splice(idx, 1)
            return {
                items: newItems
            }
        })
    }

    getFilteredBooks(){
        const {filter, items} = this.state;
        if(!filter){
            return items;
        }
        const filterStr = filter.toLowerCase()
        const result = items.filter(item => {
            const title = item.title.toLowerCase();
            return title.includes(filterStr);
        });
        return result;
    }

    render() {
        const {handleChange, handleSubmit, removeBook} = this;
        const {items, title, author, filter} = this.state;
        const filteredBooks = this.getFilteredBooks();
        const elements = filteredBooks.map(item => <li key={item.id}>
            {item.title}. {item.author}. <button onClick={()=>removeBook(item.id)}>Delete</button>
        </li>);

        return (
            <div className="my-books">
                <div className="book-add-form-container">
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
                </div>
                <div className="book-list-container">
                    <div className="form-group">
                        <label htmlFor="" className="form-group-label">Фильтр по названию книги</label>
                        <input value={filter} required name="filter" onChange={handleChange} type="text" className="form-group-input" placeholder="Фильтр по названию книги" />
                    </div>                    
                    <ul>
                        {elements}
                    </ul>
                </div>
            </div>
        )
    }
   
}

export default MyBooks;