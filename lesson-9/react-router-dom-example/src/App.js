import {Routes, Route} from "react-router-dom";

import HeaderMenu from "./modules/HeaderMenu";

import LayoutPage from "./modules/LayoutPage";
import HomePage from "./pages/HomePage";
import PostsSearchPage from "./pages/PostsSearchPage";
import MyBooksPage from "./pages/MyBooksPage";
import ContactsPage from "./pages/ContactsPage";
import NotFoundPage from "./pages/NotFoundPage"
import SinglePostPage from "./pages/SinglePostPage";

import './App.css';

function App() {
  return (
    <div className="App">
     <Routes>
       <Route path="/" element={<LayoutPage />}>
          <Route index element={<HomePage />} />
          <Route path="posts/:id" element={<SinglePostPage />} />
          <Route path="posts-search" element={<PostsSearchPage />} />
          <Route path="my-books" element={<MyBooksPage />} />
          <Route path="contacts" element={<ContactsPage />} />
          <Route path="*" element={<NotFoundPage />} />
       </Route>
     </Routes>
    </div>
  );
}

export default App;
