import actions from "./books-actions";

import services from "../../shared/services/books";

const fetchBooks = ()=> {
    const func = async (dispatch) => {
        dispatch(actions.fetchRequest());
        try {
            const result = await services.getBooks();
            dispatch(actions.fetchSuccess(result));
        } catch (error) {
            dispatch(actions.fetchError(error));
        }
    }

    return func;
}

const add = data => {
    const func = async(dispatch, getState) => {
        const {books} = getState();
        const {title, author} = data;
        const titleCompare = title.toLowerCase();
        const authorCompare = author.toLowerCase();
        const result = books.items.find(({title, author}) => {
            return (title.toLowerCase() === titleCompare && author.toLowerCase() === authorCompare);
        });
        if(result){
            alert("This book already exist!");
            return;
        }
        dispatch(actions.addRequest());
        try {
            const newBook = await services.addBook(data);
            dispatch(actions.addSuccess(newBook));
        }
        catch(error){
            dispatch(actions.addError(error));
        }
    };

    return func;
}

const remove = id => {
    const func = async (dispatch) => {
        dispatch(actions.removeRequest());
        try {
            const result = await services.removeBook(id);
            dispatch(actions.removeSuccess(id));
        }
        catch(error){
            dispatch(actions.removeError())
        }
    };

    return func;
}

const operations = {
    fetchBooks,
    add,
    remove
}

export default operations;