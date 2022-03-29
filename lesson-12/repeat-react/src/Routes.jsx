import {Routes, Route, Navigate} from "react-router-dom";

import LayoutPage from "./client/LayoutPage";

import HomePage from "./pages/HomePage";
import ProductsPage from "./pages/ProductsPage";
import SingleProductPage from "./pages/SingleProductPage";
import ReviewsPage from "./pages/ReviewsPage";
import ContactsPage from "./pages/ContactsPage";
// import NotFoundPage from "./pages/NotFoundPage";

const MyRoutes = ()=> {
    return (
        <Routes>
        <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="products/" element={<ProductsPage />} />
          <Route path="/products/:id/*" element={<SingleProductPage />}>
            <Route path="reviews" element={<ReviewsPage />} />
          </Route>
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
          {/* <Route path="*" element={<NotFoundPage />} /> */}
        </Route>
      </Routes>
    )
}

export default MyRoutes;