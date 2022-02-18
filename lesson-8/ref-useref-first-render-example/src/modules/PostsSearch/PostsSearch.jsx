import { Component, useState, useEffect } from "react";

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

// class PostsSearch extends Component {

//     state = {
//         posts: [],
//         loading: false,
//         error: null,
//         search: "",
//         page: 1,
//         modalOpen: false,
//         modalContent: null
//     }

//     componentDidUpdate(prevProps, prevState){
//         const {search, page} = this.state;
//         if(search !== prevState.search || page !== prevState.page) {
//             this.setState({
//                 loading: true
//             });
//             this.fetchPosts();
//         }
//     }

//     async fetchPosts() {
//         const {search, page} = this.state;
//         try {
//             const data = await searchPosts(page, search);
//             this.setState(prevState => {
//                 return {
//                     posts: [...prevState.posts, ...data],
//                     loading: false,
//                     error: null
//                 }
//             })
//         }
//         catch(error) {
//             this.setState({
//                 error: error.message,
//                 loading: false
//             })
//         }
//     }

//     changeSearch = ({search}) => {
//         this.setState({search, posts: []})
//     }

//     loadMore = ()=> {
//         this.setState(({page}) => {
//             return {
//                 page: page + 1
//             }
//         })
//     }

//     showModal = (post)=> {
//         this.setState({
//             modalOpen: true,
//             modalContent: post
//         })
//     }

//     hideModal = ()=> {
//         this.setState({
//             modalOpen: false,
//             modalContent: null
//         })
//     }

//     render() {
//         const {changeSearch, loadMore, showModal, hideModal} = this;
//         const {loading, error, posts, search, modalOpen, modalContent} = this.state;
        
//         return (
//             <div className={styles.container}>
//                 <div className={styles.searchContainer}>
//                     <PostsSearchForm onSubmit={changeSearch} />
//                 </div>
                
//                 {error && <p>Ошибка поиска</p>}
//                 {!posts.length && search && !loading && !error && <p>Ничего не найденно</p>}
//                 <PostList handleClick={showModal} posts={posts} />
//                 {loading && <p>...Loading</p>}
//                 {modalOpen && <Modal handleClose={hideModal}>
//                     <div>
//                         <p><strong>userId:</strong> {modalContent.userId}</p>
//                         <p><strong>id:</strong> {modalContent.id}</p>
//                         <p><strong>title:</strong> {modalContent.title}</p>
//                         <p><strong>body:</strong> {modalContent.body}</p>
//                     </div>
//                 </Modal>}
//                 {Boolean(posts.length) && <button onClick={loadMore}>Load more</button>}
//             </div>
//         )
//     }
// }

export default PostsSearch