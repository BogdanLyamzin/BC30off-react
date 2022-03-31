import { useState, useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import BookList from "./BookList";
import Filter from "./Filter";
import BookAddForm from "./BookAddForm";

import {actions} from "../../redux/books/books-slice";
import {getAllBooks} from "../../redux/books/books-selectors";

import "./my-books.css";

import {getFilteredBooks} from "./getFilteredBooks"

const MyBooks = ()=> {
    const books = useSelector(getAllBooks, shallowEqual);
    const dispatch = useDispatch();
    
    const [filter, setFilter] = useState("");

    const changeFilter = useCallback(({target})=> setFilter(target.value), []);

    const filteredBooks = getFilteredBooks(filter, books);

    const addBook = (payload)=> {
        const action = actions.add(payload);
        dispatch(action);
    };
    
    const removeBook = (id)=> {
        dispatch(actions.remove(id));
    };
    
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

export default MyBooks;