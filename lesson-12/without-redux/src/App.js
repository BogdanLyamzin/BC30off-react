import { useState } from "react";
import { nanoid } from "nanoid";

import Routes from "./Routes";

import "./shared/styles/style.scss";

function App() {
  const [books, setBooks] = useState([]);

  const addBook = ({title, author})=> {
    setBooks(prevState => {
        const newBook = {
            title,
            author,
            id: nanoid()
        };

        return [...prevState, newBook]
    })
};

const removeBook = (id) => {
    setBooks(prevState => {
        return prevState.filter(item => item.id !== id)
    })
};

  return (
    <div className="App">
      <Routes books={books} addBook={addBook} removeBook={removeBook} />
    </div>
  );
}

export default App;
