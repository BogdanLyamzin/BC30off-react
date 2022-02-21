import { useState, useEffect} from "react";
import { Link } from "react-router-dom";

import { getPosts } from "../../shared/services/posts";

import styles from "./post-list.module.css";

const PostList = ()=> {
    const [data, setData] = useState({
        posts: [],
        loading: false,
        error: null
    });
    const [page, setPage] = useState(1);

    useEffect(()=> {
        const fetchPosts = async ()=> {
            try {
                const newData = await getPosts(page);
                setData(prevState => {
                    return {
                        posts: [...prevState.posts, ...newData],
                        loading: false,
                        error: null
                    }
                })
            }
            catch(error){
                setData(prevState => {
                    return {
                        ...prevState,
                        loading: false,
                        error: error.message
                    }
                })
            }
        }
        fetchPosts()
    }, [page]);

    const loadMore = () => setPage(prevState => prevState + 1);

    const {posts, loading, error} = data;

    const elements = posts.map(item => (
        <li className={styles.item} key={item.id}>
            <Link className={styles.link} to={`/posts/${item.id}`}>{item.title}</Link>
        </li>
    ));

    return (
        <>
        <ul className={styles.list}>
            {elements}
        </ul>
        {error && <p>Что-то пошло не так</p>}
        {loading && <p>...Loading</p>}
        <button onClick={loadMore}>Load more</button>
        </>
    )
}

export default PostList;