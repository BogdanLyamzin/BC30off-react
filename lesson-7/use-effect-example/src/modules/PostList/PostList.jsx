import {Component, useState, useEffect} from "react";

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
            <h4>{item.title}</h4>
            <p>{item.body}</p>
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

// class PostList extends Component {
//     state = {
//         posts: [],
//         loading: false,
//         error: null,
//         page: 1
//     }

//     componentDidMount(){
//         this.fetchPosts();
//     }
    
//     componentDidUpdate(prevProps, prevState) {
//         const {page} = this.state;
//         if(page > prevState.page){
//             this.fetchPosts();
//         }
//     }

//     async fetchPosts(){
//         this.setState({
//             loading: true
//         })
//         const {page} = this.state;

//         try {
//             const data = await getPosts(page);
//             this.setState(prevState => {
//                 return {
//                     posts: [...prevState.posts, ...data],
//                     loading: false,
//                     error: null
//                 }
//             })
//         } catch (error) {
//             this.setState({
//                 loading: false,
//                 error: error.message
//             })
//         }
//     }

//     loadMore = ()=> {
//         this.setState(prevState => {
//             return {
//                 page: prevState.page + 1
//             }
//         })
//     }

//     render() {
//         const {posts, loading, error} = this.state;
//         const {loadMore} = this;

//         const elements = posts.map(item => (
//             <li className={styles.item} key={item.id}>
//                 <h4>{item.title}</h4>
//                 <p>{item.body}</p>
//             </li>
//         ));
    
//         return (
//             <>
//             <ul className={styles.list}>
//                 {elements}
//             </ul>
//             {error && <p>Что-то пошло не так</p>}
//             {loading && <p>...Loading</p>}
//             <button onClick={loadMore}>Load more</button>
//             </>
//         )
//     }
// }

export default PostList;