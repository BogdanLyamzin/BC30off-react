import {Navigate, Route, Routes} from "react-router-dom";

import LayoutPage from "./client/LayoutPage";

import HomePage from "./pages/HomePage";
import MyBooksPage from "./pages/MyBooksPage";
import MyFavoriteBooksPage from "./pages/MyFavoriteBooksPage";
import ProductsPage from "./pages/ProductsPage";
import CartPage from "./pages/CartPage";

const MyRoutes = ({books, addBook, removeBook})=> {
    return (
        <Routes>
            <Route path="/" element={<LayoutPage />}>
                <Route index element={<HomePage />} />
                <Route path="my-books" element={<MyBooksPage books={books}  addBook={addBook} removeBook={removeBook} />} />
                <Route path="my-favorite-books" element={<MyFavoriteBooksPage books={books} />} />
                <Route path="products" element={<ProductsPage />} />
                <Route path="cart" element={<CartPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default MyRoutes;