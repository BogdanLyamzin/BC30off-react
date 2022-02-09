import styles from "./book-list.module.css";

const BookList = ()=> {
    return (
        <div className="book-list-container">
            <button className={styles.btn}>Удалить</button>
        </div>
    )
}

export default BookList;