import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import PostsSearchForm from "./PostsSearchForm"
import PostList from "./PostList";

import {searchPosts} from "../../shared/services/posts";

import styles from "./posts-search.module.css";

const PostsSearch = ()=> {
    const [data, setData] = useState({
        posts: [],
        loading: false,
        error: null,        
    });

    const [searchParams, setSearchParams] = useSearchParams();
    const search = searchParams.get("search");
    const page = searchParams.get("page");

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
    }, [searchParams, page])

    const changeSearch = ({search}) => setSearchParams({search, page: 1});

    const loadMore = ()=> setSearchParams({search, page: Number(page) + 1});

    const {error, posts, loading} = data;

    return (
        <div className={styles.container}>
            <div className={styles.searchContainer}>
                <PostsSearchForm onSubmit={changeSearch} />
            </div>
            
            {error && <p>Ошибка поиска</p>}
            {!posts.length && search && !loading && !error && <p>Ничего не найденно</p>}
            <PostList posts={posts} />
            {loading && <p>...Loading</p>}
            {Boolean(posts.length) && <button onClick={loadMore}>Load more</button>}
        </div>
    )
}

export default PostsSearch