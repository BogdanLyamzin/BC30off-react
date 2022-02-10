import styles from "./book-list.module.css";

const AllBooks = ({ items, onClick }) => {
    const books = items.map((item, index) => <li className={styles.item} key={item.id}>
        <p>Название: {item.name} <button onClick={()=> onClick(index)} >В избранное</button></p>
        <p>Автор: {item.author}</p>
    </li>);

    return (
        <ul>
            {books}
        </ul>
    )
}

export default AllBooks;