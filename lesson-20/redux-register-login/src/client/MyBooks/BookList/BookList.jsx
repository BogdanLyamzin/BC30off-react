import "./book-list.css";

const BookList = ({books, removeBook}) => {
    const elements = books.map(item => <li key={item._id}>
        {item.title}. {item.author}. <button onClick={()=>removeBook(item._id)}>Delete</button>
    </li>);

    return (
        <ul>
            {elements}
        </ul>
    )
}

export default BookList;