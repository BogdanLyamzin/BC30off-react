import { Component, useState } from "react";
import { nanoid } from "nanoid";

import BookList from "./BookList";
import Filter from "./Filter";
import BookAddForm from "./BookAddForm";

import "./my-books.css";

import {getFilteredBooks} from "./getFilteredBooks"

const MyBooks = ()=> {
    const [books, setBooks] = useState([]);
    const [filter, setFilter] = useState("");

    const changeFilter = ({target})=> setFilter(target.value);

    const addBook = ({title, author})=> {
        setBooks(prevState => {
            const newBook = {
                title,
                author,
                id: nanoid()
            };

            return [...prevState, newBook]
        })
    };

    const removeBook = (id) => {
        setBooks(prevState => {
            return prevState.filter(item => item.id !== id)
        })
    };

    const filteredBooks = getFilteredBooks(filter, books);

    return (
        <div className="my-books">
            <div className="book-add-form-container">
                <BookAddForm onSubmit={addBook} />
            </div>
            <div className="book-list-container">
                <Filter filter={filter} handleChange={changeFilter} />
                <BookList removeBook={removeBook} books={filteredBooks} />
            </div>
        </div>
    )
}

// class MyBooks extends Component {
//     state = {
//         items: [],
//         filter: ""
//     }

//     handleChange = (e)=> {
//         const {name, value} = e.target;
//         this.setState({
//             [name]: value
//         })
//     }

//     addBook = ({ title, author }) => {
//         const { items } = this.state;
//         const result = items.find(item => item.title === title);
//         if (result) {
//             alert(`${title} уже есть в списке`);
//             return;
//         }

//         this.setState(prevState => {
//             const { items } = prevState;
//             const newBook = {
//                 title,
//                 author,
//                 id: nanoid()
//             };
//             // const newItems = [...items, newBook]
//             return {
//                 items: [...items, newBook],
//                 // items: newItems
//             }
//         })
//     }

//     removeBook = (bookId) => {
//         this.setState(prevState => {
//             const { items } = prevState;
//             const newItems = items.filter(item => item.id !== bookId);
//             // const newItems = [...items];
//             // const idx = newItems.findIndex(item => item.id === bookId)
//             // newItems.splice(idx, 1)
//             return {
//                 items: newItems
//             }
//         })
//     }

//     getFilteredBooks() {
//         const { filter, items } = this.state;
//         if (!filter) {
//             return items;
//         }
//         const filterStr = filter.toLowerCase()
//         const result = items.filter(item => {
//             const title = item.title.toLowerCase();
//             return title.includes(filterStr);
//         });
//         return result;
//     }

//     render() {
//         const { removeBook, handleChange } = this;
//         const { filter } = this.state;
//         const filteredBooks = this.getFilteredBooks();

//         return (
//             <div className="my-books">
//                 <div className="book-add-form-container">
//                     <BookAddForm onSubmit={this.addBook} />
//                 </div>
//                 <div className="book-list-container">
//                     <Filter filter={filter} handleChange={handleChange} />
//                     <BookList removeBook={removeBook} books={filteredBooks} />
//                 </div>
//             </div>
//         )
//     }
// }

export default MyBooks;