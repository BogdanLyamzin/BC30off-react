import styles from "./book-list.module.css";

const FavoriteBooks = ({ items }) => {
    const books = items.map((item) => <li className={styles.item} key={item.id}>
        <p>Название: {item.name} <button >Убрать</button></p>
        <p>Автор: {item.author}</p>
    </li>);
    
    return (
        <ul>
            {books}
        </ul>
    )
}

export default FavoriteBooks;