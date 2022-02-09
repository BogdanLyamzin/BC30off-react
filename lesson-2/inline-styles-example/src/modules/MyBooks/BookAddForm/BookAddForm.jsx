import "./book-add-form.css";

import styles from "./styles"


const BookAddForm = ()=> {
    return (
        <div className="book-add-form-container">
            <div className="form-group">
                <label htmlFor="" className="form-group-label">Название книги</label>
                <input type="text" className="form-group-input" placeholder="Название книги" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-group-label">Любимая</label>
                <input type="checkbox" className="form-group-input" />
            </div>
            <div className="form-group">
                <label htmlFor="" className="form-group-label"></label>
                <button style={styles.btn}>Добавить</button>
            </div>
        </div>
    )
}

export default BookAddForm;