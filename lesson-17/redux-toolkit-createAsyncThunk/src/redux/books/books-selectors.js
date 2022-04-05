export const getAllBooks = state => state.books.items;
export const getBooksLoading = state => state.books.loading;

export const getFavoriteBooks = ({books}) => books.items.filter(item => item.favorite);
