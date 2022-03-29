import { useState, useCallback } from "react";
import { nanoid } from "nanoid";

import BookList from "./BookList";
import Filter from "./Filter";
import BookAddForm from "./BookAddForm";

import "./my-books.css";

import {getFilteredBooks} from "./getFilteredBooks"

const MyBooks = ({books, addBook, removeBook})=> {
    const [filter, setFilter] = useState("");

    const changeFilter = useCallback(({target})=> setFilter(target.value), []);



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

export default MyBooks;