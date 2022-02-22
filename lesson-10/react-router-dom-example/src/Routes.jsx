import { lazy, Suspense } from "react";
import {Routes, Route, Navigate} from "react-router-dom";

import LayoutPage from "./modules/LayoutPage";
const HomePage = lazy(()=> import("./pages/HomePage"));
const PostsSearchPage = lazy(()=> import("./pages/PostsSearchPage"));
const MyBooksPage = lazy(()=> import("./pages/MyBooksPage"));
const ContactsPage = lazy(()=> import("./pages/ContactsPage"));
const NotFoundPage = lazy(()=> import("./pages/NotFoundPage"));
const SinglePostPage = lazy(()=> import("./pages/SinglePostPage"));
const CommentsPage = lazy(()=> import("./pages/CommentsPage"));

const Routers = ()=> {
    return (
      <Suspense fallback={<p>...Loading</p>}>
        <Routes>
            <Route path="/" element={<LayoutPage />}>
              <Route index element={<HomePage />} />
              <Route path="posts/:id/*" element={<SinglePostPage />}>
                <Route path="comments" element={<CommentsPage />} />
              </Route>
              <Route path="posts-search" element={<PostsSearchPage />} />
              <Route path="my-books" element={<MyBooksPage />} />
              <Route path="contacts" element={<ContactsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
              {/* <Route path="*" element={<NotFoundPage />} /> */}
            </Route>
      </Routes>
      </Suspense>
    )
}

export default Routers