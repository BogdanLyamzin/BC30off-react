const MyFavoriteBooksPage = ({books})=> {
    const elements = books.map(item => (
        <li key={item.id}>
            <p>{item.title}</p>
            <p>{item.author}</p>
        </li>
    ))
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