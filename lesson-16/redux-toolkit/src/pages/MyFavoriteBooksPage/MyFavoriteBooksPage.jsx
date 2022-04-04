import {useSelector, shallowEqual} from "react-redux";

import {getFavoriteBooks} from "../../redux/books/books-selectors";

const MyFavoriteBooksPage = ()=> {
    const books = useSelector(getFavoriteBooks, shallowEqual);
    const elements = books.map(item => (
        <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.author}</p>
        </li>
    ));

    return (
        <main>
            <div className="container">
                <h2 className="page-title">My favorite books Page</h2>
                <ul>
                    {elements}
                </ul>
            </div>
        </main>
    )
}

export default MyFavoriteBooksPage;