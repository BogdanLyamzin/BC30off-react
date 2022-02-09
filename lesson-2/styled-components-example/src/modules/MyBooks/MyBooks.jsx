import BookAddForm from "./BookAddForm";
import BookList from "./BookList";

import "./my-books.css";

const MyBooks = ()=> {
    return (
        <div className="my-books">
            <BookAddForm />
            <BookList />
        </div>
    )
}

export default MyBooks;