export const getAllBooks = state => state.books;

export const getFavoriteBooks = state => state.books.filter(item => item.favorite);
// export const getFavoriteBooks = state => {
//     const books = getAllBooks(state);
//     return books.filter(item => item.favorite);
// }