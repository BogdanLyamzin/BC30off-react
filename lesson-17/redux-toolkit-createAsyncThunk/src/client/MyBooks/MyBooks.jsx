import { useState, useEffect, useCallback } from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";

import BookList from "./BookList";
import Filter from "./Filter";
import BookAddForm from "./BookAddForm";

import operations from "../../redux/books/books-operations";

import {getAllBooks, getBooksLoading} from "../../redux/books/books-selectors";

import "./my-books.css";

import {getFilteredBooks} from "./getFilteredBooks"

const MyBooks = ()=> {
    const books = useSelector(getAllBooks, shallowEqual);
    const loading = useSelector(getBooksLoading, shallowEqual);
    const dispatch = useDispatch();
    
    const [filter, setFilter] = useState("");

    useEffect(()=> {
        const getBooks = () => dispatch(operations.fetchBooks());
        getBooks();
    }, [dispatch]);

    const changeFilter = useCallback(({target})=> setFilter(target.value), []);

    const filteredBooks = getFilteredBooks(filter, books);

    const addBook = (payload)=> {
        const action = operations.addBook(payload);
        dispatch(action);
    };
    
    const removeBook = (id)=> {
        dispatch(operations.removeBook(id));
    };
    
    return (
        <div className="my-books">
            <div className="book-add-form-container">
                <BookAddForm onSubmit={addBook} />
            </div>
            <div className="book-list-container">
                <Filter filter={filter} handleChange={changeFilter} />
                {loading && <p>...Loading</p>}
                <BookList removeBook={removeBook} books={filteredBooks} />
            </div>
        </div>
    )
}

export default MyBooks;