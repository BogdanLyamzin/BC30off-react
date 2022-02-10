import { Component } from "react";

import AllBooks from "./AllBooks";
import FavoriteBooks from "./FavoriteBooks";

import styles from "./book-list.module.css";

import { list } from "./list";

class BookList extends Component {
    state = {
        items: [...list]
    }

    addToFavorite = (idx) => {
        this.setState(({ items }) => {
            const newItems = items.map(item => ({ ...item }));
            newItems[idx].favorite = true;

            return {
                items: newItems
            }
        })
    }

    render() {
        const { items } = this.state;
        const { addToFavorite } = this;

        const favoriteBooks = items.filter(item => item.favorite);

        return (
            <div className={styles.container}>
                <div className={styles.block}>
                    <AllBooks onClick={addToFavorite} items={items} />
                </div>
                <div className={styles.block}>
                    <FavoriteBooks items={favoriteBooks} />
                </div>
            </div>
        )
    }
}

export default BookList;