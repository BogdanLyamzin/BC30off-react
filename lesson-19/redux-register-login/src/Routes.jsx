import {Navigate, Route, Routes} from "react-router-dom";

import LayoutPage from "./client/LayoutPage";

import HomePage from "./pages/HomePage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import MyBooksPage from "./pages/MyBooksPage";
import MyFavoriteBooksPage from "./pages/MyFavoriteBooksPage";

const MyRoutes = ()=> {
    return (
        <Routes>
            <Route path="/" element={<LayoutPage />}>
                <Route index element={<HomePage />} />
                <Route path="signup" element={<RegisterPage />} />
                <Route path="login" element={<LoginPage />} />
                <Route path="my-books" element={<MyBooksPage />} />
                <Route path="my-favorite-books" element={<MyFavoriteBooksPage />} />
                <Route path="*" element={<Navigate to="/" replace />} />
            </Route>
        </Routes>
    )
}

export default MyRoutes;