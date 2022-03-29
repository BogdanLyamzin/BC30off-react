import MyBooks from "../../client/MyBooks";

const MyBooksPage = ({books, addBook, removeBook})=> {
    return (
        <main>
            <div className="container">
                <h2 className="page-title">My books Page</h2>
                <MyBooks books={books}  addBook={addBook} removeBook={removeBook} />
            </div>
        </main>
    )
}

export default MyBooksPage;