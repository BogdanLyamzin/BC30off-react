import { useState, useEffect } from "react";

import PostsSearchForm from "./PostsSearchForm"
import PostList from "./PostList";
import Modal from "../../shared/components/Modal";

import {searchPosts} from "../../shared/services/posts";

import styles from "./posts-search.module.css";

const PostsSearch = ()=> {
    const [data, setData] = useState({
        posts: [],
        loading: false,
        error: null,        
    });
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const [modal, setModal] = useState({
        open: false,
        content: null  
    });

    useEffect(()=>{
        const fetchPosts = async()=> {
            try {
                const newData = await searchPosts(page, search);
                setData(prevState => {
                    return {
                        posts: [...prevState.posts, ...newData],
                        loading: false,
                        error: null
                    }
                })
            }
            catch(error) {
                setData({
                    ...data,
                    loading: false,
                    error: error.message
                })
            }
        }
        if(search) {
            fetchPosts();
            setData({
                ...data,
                loading: true
            })
        }
    }, [search, page])

    const changeSearch = ({search}) => setSearch(search);

    const loadMore = ()=> setPage(prevState => prevState + 1);

    const openModal = (content) => {
        setModal({
            open: true,
            content
        })
    }

    const closeModal = ()=> {
        setModal({
            open: false,
            content: null
        })
    }

    const {error, posts, loading} = data;

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <PostsSearchForm onSubmit={changeSearch} />
            </div>
            
            {error && <p>Ошибка поиска</p>}
            {!posts.length && search && !loading && !error && <p>Ничего не найденно</p>}
            <PostList handleClick={openModal} posts={posts} />
            {loading && <p>...Loading</p>}
            {modal.open && <Modal handleClose={closeModal}>
                <div>
                    <p><strong>userId:</strong> {modal.content.userId}</p>
                    <p><strong>id:</strong> {modal.content.id}</p>
                    <p><strong>title:</strong> {modal.content.title}</p>
                    <p><strong>body:</strong> {modal.content.body}</p>
                </div>
            </Modal>}
            {Boolean(posts.length) && <button onClick={loadMore}>Load more</button>}
        </div>
    )
}

export default PostsSearch