import "./book-list.css";

const BookList = ()=> {
    return (
        <div className="book-list-container">
            <ul>
                <li><span>Тьма что приходит прежде</span> 
                <button className="btn">Удалить</button>
                </li>
            </ul>
        </div>
    )
}

export default BookList;